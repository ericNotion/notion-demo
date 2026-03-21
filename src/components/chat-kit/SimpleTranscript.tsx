import { ScrollToBottomButton } from "@/components/chat-kit/ScrollToBottomButton";
import { cn } from "@/utils/cn";
import { UIMessage } from "ai";
import { useCallback, useEffect, useRef, useState } from "react";
import { ReasoningAssistantMessage } from "./messages/SimpleAssistantMessage";
import { SimpleUserMessage } from "./messages/SimpleUserMessage";

export function SimpleTranscript({
  status,
  messages,
  gradientColorFrom,
}: {
  status: "submitted" | "streaming" | "ready" | "error";
  messages: UIMessage[];
  gradientColorFrom?: string;
}) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [shouldAutoScroll, setShouldAutoScroll] = useState(false);
  const [showTopGradient, setShowTopGradient] = useState(false);
  const totalParts = messages.reduce((acc, message) => {
    return acc + message.parts.length;
  }, 0);

  // Auto-scroll only when new messages arrive and shouldAutoScroll is true
  useEffect(() => {
    if (!shouldAutoScroll) return;

    const performScroll = () => {
      const container = messagesContainerRef.current;
      if (!container) return;

      // During streaming, use instant scroll for smoother experience
      container.scrollTo({
        top: container.scrollHeight,
        behavior: status === "streaming" ? "instant" : "smooth",
      });
    };

    // Initial scroll
    performScroll();

    // If we're loading (streaming) and user wants auto-scroll, keep scrolling
    let interval: NodeJS.Timeout;
    if (status === "streaming") {
      interval = setInterval(performScroll, 10); // More frequent updates
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [messages.length, shouldAutoScroll, totalParts, status]);

  // Auto-scroll when the content of the scrollable area changes (using MutationObserver)
  useEffect(() => {
    const container = messagesContainerRef.current;
    if (!container) return;

    const handleMutate = () => {
      if (shouldAutoScroll) {
        messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
      }
    };

    const observer = new window.MutationObserver(handleMutate);
    observer.observe(container, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => {
      observer.disconnect();
    };
  }, [shouldAutoScroll]);

  // Check if user is at bottom of scroll
  const isAtBottom = useCallback(() => {
    const container = messagesContainerRef.current;
    if (!container) return true;

    const { scrollTop, scrollHeight, clientHeight } = container;
    return Math.abs(scrollHeight - scrollTop - clientHeight) < 20;
  }, []);

  // Check scroll position and update button visibility
  const checkScrollPosition = useCallback(() => {
    const container = messagesContainerRef.current;
    if (!container) return;

    const { scrollTop, scrollHeight, clientHeight } = container;
    const distanceFromBottom = scrollHeight - scrollTop - clientHeight;
    setShowScrollButton(distanceFromBottom > 100);

    // Update shouldAutoScroll based on scroll position
    setShouldAutoScroll(isAtBottom());

    // Show top gradient if not at the very top
    setShowTopGradient(scrollTop > 0);
  }, [isAtBottom, setShouldAutoScroll]);

  useEffect(() => {
    const container = messagesContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      checkScrollPosition();
    };

    container.addEventListener("scroll", handleScroll);
    checkScrollPosition();

    return () => container.removeEventListener("scroll", handleScroll);
  }, [checkScrollPosition]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    setShouldAutoScroll(true);
  };

  return (
    <>
      <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden">
        {/* top gradient */}
        {showTopGradient && (
          <div
            className={cn(
              "pointer-events-none absolute top-0 right-0 left-0 z-10 h-10 bg-gradient-to-b from-neutral-50 to-transparent dark:from-neutral-900",
              gradientColorFrom,
            )}
          />
        )}

        <div
          id="transcript-container"
          ref={messagesContainerRef}
          className="scrollbar-hidden flex-1 overflow-y-auto px-4 pt-4 pb-8"
        >
          <div className="mx-auto flex w-full max-w-3xl flex-col">
            {messages?.map((message, index) => {
              if (message.role === "user") {
                return <SimpleUserMessage key={message.id} message={message} />;
              }

              if (message.role === "assistant") {
                return (
                  <ReasoningAssistantMessage
                    key={message.id}
                    message={message}
                    isLastMessage={index === messages.length - 1}
                    status={status}
                  />
                );
              }

              return (
                <p key={message.id}>Unknown message role: {message.role}</p>
              );
            })}
          </div>

          <div ref={messagesEndRef} />
        </div>

        {/* Scroll to bottom button */}
        <div
          className={cn(
            "pointer-events-none absolute right-0 bottom-0 left-0 z-10 h-[32px] w-full bg-gradient-to-t from-neutral-50 to-transparent dark:from-neutral-900",
            gradientColorFrom,
          )}
        >
          <ScrollToBottomButton
            scrollToBottom={scrollToBottom}
            visible={showScrollButton}
          />
        </div>
      </div>
    </>
  );
}

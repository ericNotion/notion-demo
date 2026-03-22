"use client";

import { SimpleTranscript } from "@/components/chat-kit";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/utils/cn";
import { useChat } from "@ai-sdk/react";
import { Icon, type LoadedIconFunction } from "@nds-icons";
import { arrowChevronSingleLeftIcon } from "@nds-icons/arrowChevronSingleLeft/default.icon";
import { arrowChevronSingleRightIcon } from "@nds-icons/arrowChevronSingleRight/default.icon";
import { arrowExpandDiagonalIcon } from "@nds-icons/arrowExpandDiagonal/default.icon";
import { arrowLineDownIcon } from "@nds-icons/arrowLineDown/default.icon";
import { chatBubbleIcon } from "@nds-icons/chatBubble/default.icon";
import { checkmarkIcon } from "@nds-icons/checkmark/default.icon";
import { eyeSlashIcon } from "@nds-icons/eyeSlash/default.icon";
import { magnifyingGlassIcon } from "@nds-icons/magnifyingGlass/default.icon";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { forwardRef, useEffect, useRef, useState } from "react";

const spring = {
  type: "spring" as const,
  stiffness: 700,
  damping: 34,
  mass: 0.4,
};

const CHAT_HEIGHT = 440;
const MAX_MENU_HEIGHT = 440;

// Types for configurable menu items
export interface SubmenuOption {
  id: string;
  label: string;
  icon: LoadedIconFunction;
}

export interface SkateboardMenuItem {
  id: string;
  label: string;
  type: "submenu" | "switch" | "action";
  icon?: LoadedIconFunction;
  shortcut?: string;
  // For submenu type:
  submenuOptions?: SubmenuOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  // For switch type:
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  // For action type:
  action?: () => void;
}

export interface SkateboardProps {
  menuItems: SkateboardMenuItem[];
  enableChat?: boolean;
  chatEndpoint?: string;
  onToolResult?: (toolName: string, result: unknown) => void;
  /** Called before chat submission. Return true to prevent chat, false to continue. */
  onCommandSubmit?: (input: string) => boolean;
  defaultExpanded?: boolean;
  expanded?: boolean;
  disableGlobalShortcut?: boolean;
}

type MenuLevel = "main" | string; // "main" or a submenu id like "credit-pack"

type DynamicItem = {
  id: string;
  label: string;
  dynamicIntent: "chat" | "search";
};

type SubmenuOptionItem = SubmenuOption & {
  type: "submenu-option";
};

type BackItem = {
  id: "back";
  label: "Back";
};

export function Skateboard({
  menuItems,
  enableChat = true,
  chatEndpoint = "/api/chat",
  onToolResult,
  onCommandSubmit,
  defaultExpanded = false,
  expanded,
  disableGlobalShortcut = false,
}: SkateboardProps) {
  const [isHidden, setIsHidden] = useState(false);
  const [hideOnCollapse, setHideOnCollapse] = useState(false); // Toggle state for "hide when menu closes"
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  useEffect(() => {
    if (expanded !== undefined) setIsExpanded(expanded);
  }, [expanded]);
  const [inputValue, setInputValue] = useState("");
  const [focusedIndex, setFocusedIndex] = useState(-1); // -1 = input, 0+ = menu items
  const [menuLevel, setMenuLevel] = useState<MenuLevel>("main");
  const [isChatting, setIsChatting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // AI Chat hook (only used if enableChat is true)
  const {
    messages: chatMessages,
    input: chatInput,
    setInput: setChatInput,
    append: appendMessage,
    isLoading: isChatLoading,
    setMessages: setChatMessages,
  } = useChat({
    api: chatEndpoint,
    onError: (error) => {
      console.error("Chat error:", error);
    },
  });

  // Derive chat status from isLoading state
  const chatStatus: "submitted" | "streaming" | "ready" | "error" =
    isChatLoading
      ? chatMessages.length > 0
        ? "streaming"
        : "submitted"
      : "ready";

  // Track processed tool invocations to avoid duplicates
  const processedToolInvocations = useRef<Set<string>>(new Set());

  // Detect and report tool results to parent
  useEffect(() => {
    if (!onToolResult) return;

    for (const msg of chatMessages) {
      if (msg.role === "assistant" && msg.toolInvocations) {
        for (const inv of msg.toolInvocations) {
          if (inv.state === "result") {
            const invKey = `${msg.id}-${inv.toolCallId}`;
            if (!processedToolInvocations.current.has(invKey)) {
              processedToolInvocations.current.add(invKey);
              onToolResult(inv.toolName, inv.result);
            }
          }
        }
      }
    }
  }, [chatMessages, onToolResult]);

  const inputRef = useRef<HTMLInputElement>(null);
  const menuContentRef = useRef<HTMLDivElement>(null);
  const [menuHeight, setMenuHeight] = useState(0);
  const menuItemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const skipFocusSyncRef = useRef(false);

  // Find the active submenu item (if in a submenu)
  const activeSubmenuItem =
    menuLevel !== "main"
      ? menuItems.find((item) => item.id === menuLevel)
      : null;

  useEffect(() => {
    if (disableGlobalShortcut) return;
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === "k") {
        e.preventDefault();
        if (isHidden) {
          setIsHidden(false);
          setIsExpanded(true);
        } else {
          setIsExpanded((prev) => !prev);
        }
      }
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === ",") {
        e.preventDefault();
        if (isHidden) {
          setIsHidden(false);
        } else if (isExpanded) {
          setHideOnCollapse((prev) => !prev);
        } else {
          setIsHidden(true);
        }
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "b" && menuLevel !== "main") {
        e.preventDefault();
        goBack();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuLevel, isHidden, isExpanded, disableGlobalShortcut]);

  // Focus input when expanded - use rAF loop to catch element as soon as it mounts
  useEffect(() => {
    if (!isExpanded) return;

    let rafId: number;
    let attempts = 0;
    const maxAttempts = 20; // ~330ms at 60fps

    function tryFocus() {
      if (inputRef.current) {
        inputRef.current.focus();
        return;
      }
      attempts++;
      if (attempts < maxAttempts) {
        rafId = requestAnimationFrame(tryFocus);
      }
    }

    rafId = requestAnimationFrame(tryFocus);
    return () => cancelAnimationFrame(rafId);
  }, [isExpanded]);

  // When typing in main menu, auto-focus the first filtered item (if any)
  useEffect(() => {
    if (!isExpanded || menuLevel !== "main" || isChatting) return;
    const items = getCurrentMenuItems();
    const filtered = getFilteredMainItems(inputValue);
    const hasSearch = enableChat && !!inputValue.trim();
    const hasChat = enableChat && !!inputValue.trim();

    if (!inputValue.trim()) {
      setFocusedIndex(-1);
      return;
    }

    if (filtered.length > 0) {
      const offset = (hasSearch ? 1 : 0) + (hasChat ? 1 : 0);
      const targetIndex = offset; // first filtered item (after search + chat)
      if (targetIndex < items.length) setFocusedIndex(targetIndex);
    } else if (items.length > 0) {
      // no filtered items; prefer chat if present, otherwise search
      if (hasSearch && hasChat && items.length > 1) {
        setFocusedIndex(1); // chat row
      } else {
        setFocusedIndex(0);
      }
    } else {
      setFocusedIndex(-1);
    }

    if (focusedIndex >= items.length) {
      setFocusedIndex(items.length - 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue, isExpanded, menuLevel]);

  // Measure menu content height so we animate to a fixed number instead of "auto"
  useEffect(() => {
    if (!isExpanded || isChatting) return;
    const content = menuContentRef.current;
    if (!content) return;

    const updateHeight = () => setMenuHeight(content.scrollHeight);

    updateHeight();

    const observer = new ResizeObserver(() => updateHeight());
    observer.observe(content);

    return () => observer.disconnect();
  }, [isExpanded, isChatting, menuLevel, inputValue, menuItems]);

  // Sync DOM focus with focusedIndex state
  useEffect(() => {
    if (!isExpanded) return;

    if (skipFocusSyncRef.current) {
      skipFocusSyncRef.current = false;
      return;
    }

    if (focusedIndex === -1) {
      inputRef.current?.focus();
    } else if (menuItemRefs.current[focusedIndex]) {
      menuItemRefs.current[focusedIndex]?.focus();
    }
  }, [focusedIndex, isExpanded, menuLevel]);

  // Reset state when collapsing
  useEffect(() => {
    if (!isExpanded) {
      setFocusedIndex(-1);
      setMenuLevel("main");
      setIsChatting(false);
      setChatMessages([]);
      // If hideOnCollapse is set, wait for collapse animation then hide
      if (hideOnCollapse) {
        // Wait for collapse animation (~220ms) before fading out
        const timer = setTimeout(() => {
          setIsHidden(true);
          setHideOnCollapse(false); // Reset the toggle
        }, 220);
        return () => clearTimeout(timer);
      }
    }
  }, [isExpanded, setChatMessages, hideOnCollapse]);

  function resetChat() {
    setIsChatting(false);
    setChatMessages([]);
    setInputValue("");
  }

  // Navigation functions
  function goToSubmenu(level: MenuLevel) {
    setMenuLevel(level);

    // Find the menu item for this submenu and focus the currently selected option
    const submenuItem = menuItems.find((item) => item.id === level);
    if (submenuItem?.submenuOptions && submenuItem.value) {
      const selectedIndex = submenuItem.submenuOptions.findIndex(
        (opt) => opt.id === submenuItem.value,
      );
      setFocusedIndex(selectedIndex >= 0 ? selectedIndex : 0);
    } else {
      setFocusedIndex(0); // Default to first option if no value set
    }
  }

  function goBack() {
    setMenuLevel("main");
    setFocusedIndex(-1); // Reset focus to input when going back
  }

  // Handle click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node) &&
        isExpanded &&
        !inputValue
      ) {
        setIsExpanded(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isExpanded, inputValue]);

  function startChatSession(text: string) {
    if (!enableChat) return;
    const trimmed = text.trim();
    if (!trimmed) return;

    setIsChatting(true);
    setFocusedIndex(-1);
    setInputValue("");

    // Use append to programmatically add a user message and trigger the AI response
    appendMessage({
      role: "user",
      content: trimmed,
    });
  }

  function handleSubmit(intent: "chat" | "search" = "chat") {
    if (!inputValue.trim()) return;
    if (intent === "search") {
      console.log("Search:", inputValue.trim());
      setInputValue("");
      return;
    }

    // Allow command interception before chat
    if (onCommandSubmit && onCommandSubmit(inputValue.trim())) {
      setInputValue("");
      return; // Command was handled
    }

    if (enableChat) {
      startChatSession(inputValue);
    }
  }

  function getDynamicSuggestion(): DynamicItem | null {
    if (!enableChat) return null;
    const text = inputValue.trim();
    if (!text) return null;

    return {
      id: "dynamic-search",
      label: text,
      dynamicIntent: "search",
    };
  }

  function getChatSuggestion(): DynamicItem | null {
    if (!enableChat) return null;
    const text = inputValue.trim();
    if (!text) return null;

    return {
      id: "dynamic-chat",
      label: text,
      dynamicIntent: "chat",
    };
  }

  function getFilteredMainItems(input: string) {
    const query = input.trim().toLowerCase();
    if (!query) return menuItems;
    return menuItems.filter((item) => item.label.toLowerCase().includes(query));
  }

  // Get current menu items based on level
  type MenuItemType =
    | SkateboardMenuItem
    | DynamicItem
    | SubmenuOptionItem
    | BackItem;

  // Internal "Hide skateboard" menu item (switch with shortcut)
  const hideSkateboardItem: SkateboardMenuItem = {
    id: "hide-skateboard",
    label: "Hide skateboard",
    type: "switch",
    icon: eyeSlashIcon,
    shortcut: "⇧⌘,",
    checked: hideOnCollapse,
    onCheckedChange: (checked) => {
      setHideOnCollapse(checked);
    },
  };

  function getCurrentMenuItems(): MenuItemType[] {
    if (isChatting) return [];
    if (menuLevel === "main") {
      const searchSuggestion = getDynamicSuggestion();
      const chatSuggestion = getChatSuggestion();
      const filtered = getFilteredMainItems(inputValue);
      // Add hide item at the bottom if no search query
      const hideItem = !inputValue.trim() ? [hideSkateboardItem] : [];
      return [
        ...(searchSuggestion ? [searchSuggestion] : []), // top
        ...(chatSuggestion ? [chatSuggestion] : []), // just under search
        ...filtered, // filtered static items
        ...hideItem, // hide item at the bottom
      ];
    } else {
      // Submenu: options from the active submenu item + back button
      const submenuOptions = activeSubmenuItem?.submenuOptions ?? [];
      const items: MenuItemType[] = [
        ...submenuOptions.map(
          (opt): SubmenuOptionItem => ({ ...opt, type: "submenu-option" }),
        ),
        { id: "back", label: "Back" } as BackItem,
      ];
      return items;
    }
  }

  // Keyboard navigation handler
  function handleKeyboardNav(e: React.KeyboardEvent, currentIndex: number) {
    if (isChatting) {
      if (e.key === "Escape" && !inputValue) {
        setIsExpanded(false);
      }
      return;
    }
    const currentItems = getCurrentMenuItems();
    const menuCount = currentItems.length;

    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (currentIndex === -1) {
        // From input, go to last menu item
        setFocusedIndex(menuCount - 1);
      } else if (currentIndex > 0) {
        // Move up in menu
        setFocusedIndex(currentIndex - 1);
      }
      // If at first menu item, stay there
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (currentIndex === -1) {
        // From input, stay (or could go nowhere)
        return;
      } else if (currentIndex < menuCount - 1) {
        // Move down in menu
        setFocusedIndex(currentIndex + 1);
      } else {
        // From last menu item, go back to input
        setFocusedIndex(-1);
      }
    } else if (e.key === "Escape") {
      if (menuLevel !== "main") {
        // In submenu, escape goes back
        goBack();
      } else if (!inputValue) {
        setIsExpanded(false);
      } else {
        // If there's input, just go back to input
        setFocusedIndex(-1);
      }
    }
  }

  // Handle menu item action
  function handleMenuItemAction(itemId: string) {
    // Dynamic items
    if (itemId === "dynamic-chat") {
      // Allow command interception before chat
      if (onCommandSubmit && onCommandSubmit(inputValue.trim())) {
        setInputValue("");
        return; // Command was handled
      }
      startChatSession(inputValue);
      return;
    }
    if (itemId === "dynamic-search") {
      handleSubmit("search");
      return;
    }

    // Back button
    if (itemId === "back") {
      goBack();
      return;
    }

    // Hide skateboard toggle - toggle the "hide on collapse" state
    if (itemId === "hide-skateboard") {
      setHideOnCollapse((prev) => !prev);
      return;
    }

    // Check if this is a main menu item
    const menuItem = menuItems.find((item) => item.id === itemId);
    if (menuItem) {
      if (menuItem.type === "submenu" && menuItem.submenuOptions) {
        goToSubmenu(menuItem.id);
      } else if (menuItem.type === "switch" && menuItem.onCheckedChange) {
        menuItem.onCheckedChange(!menuItem.checked);
      } else if (menuItem.type === "action" && menuItem.action) {
        menuItem.action();
      }
      return;
    }

    // Check if this is a submenu option
    if (activeSubmenuItem?.submenuOptions) {
      const option = activeSubmenuItem.submenuOptions.find(
        (opt) => opt.id === itemId,
      );
      if (option && activeSubmenuItem.onValueChange) {
        activeSubmenuItem.onValueChange(option.id);
      }
    }
  }

  return (
    <AnimatePresence>
      {!isHidden && (
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.92, width: 120 }}
          animate={{
            opacity: 1,
            scale: 1,
            width: isExpanded ? 440 : 180,
            borderRadius: isExpanded ? 16 : 42,
          }}
          exit={{ opacity: 0, scale: 0.92, width: 120 }}
          whileHover={!isExpanded ? { scale: 1.04 } : undefined}
          whileTap={!isExpanded ? { scale: 0.97 } : undefined}
          transition={{
            opacity: { duration: 0.1, ease: "easeOut" },
            scale: spring,
            width: spring,
            borderRadius: spring,
          }}
          onClick={() => !isExpanded && setIsExpanded(true)}
          className={cn(
            "relative overflow-hidden",
            !isExpanded && "cursor-pointer",
            isExpanded
              ? "bg-(--background-color-elevated) shadow-(--shadow-scrim-outline)"
              : "bg-(--background-color-secondary) shadow-(--shadow-diffuse-outline)",
          )}
          style={{ originY: 1 }} // Transform from bottom
        >
          {/*
        UNIFIED LAYOUT with flex-col-reverse:
        - Input row renders first in DOM but appears at BOTTOM
        - Menu section grows UPWARD above input row
        - This keeps input baseline anchored
      */}
          <div className="flex flex-col-reverse">
            {/* INPUT ROW - always present, anchored at bottom */}
            <div className="flex flex-col gap-2 px-3.5 py-2">
              <div className="flex items-center gap-1">
                {/* PERSISTENT NOSEY */}
                <div className="relative size-6 shrink-0">
                  <div className="absolute -inset-[30%]">
                    <Image
                      src="/img/andy/animatedNoseys/Nosey-Pencil.png"
                      alt="Nosey"
                      width={540}
                      height={540}
                      className="size-full"
                    />
                  </div>
                </div>

                {/* Content area - morphs between ⌘K and input */}
                <div className="flex h-8 min-w-0 grow items-center pl-2">
                  <AnimatePresence mode="popLayout" initial={false}>
                    {!isExpanded ? (
                      // Collapsed: ⌘K hint
                      <motion.div
                        key="hint"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.1 }}
                        className="flex w-full items-center justify-end"
                      >
                        <span className="text-sm leading-5 tracking-[-0.154px] text-(--text-color-tertiary)">
                          ⇧⌘K
                        </span>
                      </motion.div>
                    ) : (
                      // Expanded: Input field + submit
                      <motion.div
                        key="input"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.1 }}
                        className="flex w-full items-center"
                      >
                        <input
                          ref={inputRef}
                          type="text"
                          value={isChatting ? chatInput : inputValue}
                          onChange={(e) => {
                            skipFocusSyncRef.current = true; // keep input focused while typing
                            if (isChatting) {
                              setChatInput(e.target.value);
                            } else {
                              setInputValue(e.target.value);
                            }
                          }}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();

                              // In chat mode, send message to AI
                              if (isChatting && enableChat) {
                                if (chatInput.trim()) {
                                  appendMessage({
                                    role: "user",
                                    content: chatInput.trim(),
                                  });
                                  setChatInput("");
                                }
                                return;
                              }

                              if (menuLevel === "main") {
                                const items = getCurrentMenuItems();
                                const filtered =
                                  getFilteredMainItems(inputValue);
                                const hasSearch =
                                  enableChat && !!inputValue.trim();
                                const hasChat =
                                  enableChat && !!inputValue.trim();
                                const firstFilteredIndex = filtered.length
                                  ? (hasSearch ? 1 : 0) + (hasChat ? 1 : 0)
                                  : -1;

                                if (
                                  firstFilteredIndex >= 0 &&
                                  firstFilteredIndex < items.length
                                ) {
                                  handleMenuItemAction(
                                    items[firstFilteredIndex].id,
                                  );
                                  return;
                                }
                              }

                              // Fallback: if a menu item is focused, trigger it; otherwise submit chat
                              if (focusedIndex >= 0) {
                                const items = getCurrentMenuItems();
                                if (focusedIndex < items.length) {
                                  handleMenuItemAction(items[focusedIndex].id);
                                  return;
                                }
                              }
                              handleSubmit();
                            } else {
                              handleKeyboardNav(e, -1);
                            }
                          }}
                          onFocus={() => setFocusedIndex(-1)}
                          placeholder={
                            isChatting
                              ? "Continue the conversation..."
                              : menuLevel === "main"
                                ? "What can I help you with today?"
                                : (activeSubmenuItem?.label ??
                                  "Select an option")
                          }
                          className="min-w-0 grow bg-transparent text-[14px] leading-5 text-(--text-color-primary) placeholder:text-(--text-color-tertiary) focus:outline-none"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* MENU SECTION - grows upward above input row */}
            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  initial={{ height: isChatting ? CHAT_HEIGHT : 0, opacity: 0 }}
                  animate={{
                    height: isChatting
                      ? CHAT_HEIGHT
                      : Math.min(menuHeight || 0, MAX_MENU_HEIGHT) || "auto",
                    opacity: 1,
                  }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: spring,
                    opacity: { duration: 0.06 },
                  }}
                  className="overflow-hidden border-b border-(--border-color-secondary)"
                >
                  {isChatting && enableChat ? (
                    <div className="flex h-[440px] flex-col pt-3 pb-1.5">
                      <div className="flex shrink-0 items-center justify-between px-2">
                        <button
                          type="button"
                          onClick={resetChat}
                          className="flex size-7 items-center justify-center rounded-md text-(--icon-color-tertiary) hover:bg-(--background-color-secondary)"
                        >
                          <Icon
                            icon={arrowChevronSingleLeftIcon}
                            className="size-5"
                          />
                        </button>
                        <button
                          type="button"
                          className="flex size-7 items-center justify-center rounded-md text-(--icon-color-tertiary) hover:bg-(--background-color-secondary)"
                        >
                          <Icon
                            icon={arrowExpandDiagonalIcon}
                            className="size-5"
                          />
                        </button>
                      </div>
                      <div className="flex min-h-0 flex-1 overflow-hidden px-2">
                        <SimpleTranscript
                          status={chatStatus}
                          messages={chatMessages}
                          gradientColorFrom="from-(--background-color-elevated)"
                        />
                      </div>
                    </div>
                  ) : (
                    <div
                      ref={menuContentRef}
                      className="flex max-h-[440px] flex-col overflow-y-auto pt-3 pb-1.5"
                    >
                      <AnimatePresence mode="popLayout" initial={false}>
                        {menuLevel === "main" ? (
                          <motion.div
                            key="main"
                            initial={{ opacity: 0, x: -6, scale: 0.97 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: -6, scale: 0.97 }}
                            transition={{
                              ...spring,
                              opacity: { duration: 0.06 },
                            }}
                            className="flex flex-col gap-0.5 px-2"
                          >
                            {getCurrentMenuItems().map((item, index) => {
                              const isDynamic = "dynamicIntent" in item;
                              const isMenuItem =
                                "type" in item && item.type !== undefined;

                              let iconNode: React.ReactNode;
                              let trailingNode: React.ReactNode;

                              if (isDynamic) {
                                const dynamicItem = item as DynamicItem;
                                iconNode = (
                                  <Icon
                                    icon={
                                      dynamicItem.dynamicIntent === "chat"
                                        ? chatBubbleIcon
                                        : magnifyingGlassIcon
                                    }
                                    className="size-5"
                                  />
                                );
                                trailingNode = (
                                  <span className="text-xs text-(--text-color-tertiary)">
                                    {dynamicItem.dynamicIntent === "search"
                                      ? "⌘⏎"
                                      : "⏎"}
                                  </span>
                                );
                              } else if (isMenuItem) {
                                const menuItem = item as SkateboardMenuItem;
                                iconNode = menuItem.icon ? (
                                  <Icon
                                    icon={menuItem.icon}
                                    className="size-5"
                                  />
                                ) : (
                                  <Icon
                                    icon={
                                      menuItem.type === "submenu"
                                        ? arrowChevronSingleRightIcon
                                        : arrowLineDownIcon
                                    }
                                    className="size-5"
                                  />
                                );

                                if (menuItem.type === "submenu") {
                                  trailingNode = (
                                    <Icon
                                      icon={arrowChevronSingleRightIcon}
                                      className="size-5 text-(--icon-color-tertiary)"
                                    />
                                  );
                                } else if (menuItem.type === "action") {
                                  trailingNode = menuItem.shortcut ? (
                                    <span className="text-xs text-(--text-color-tertiary)">
                                      {menuItem.shortcut}
                                    </span>
                                  ) : null;
                                } else if (menuItem.type === "switch") {
                                  trailingNode = (
                                    <>
                                      {menuItem.shortcut && (
                                        <span className="text-xs text-(--text-color-tertiary)">
                                          {menuItem.shortcut}
                                        </span>
                                      )}
                                      <Switch
                                        checked={menuItem.checked ?? false}
                                        onCheckedChange={
                                          menuItem.onCheckedChange
                                        }
                                      />
                                    </>
                                  );
                                }
                              }

                              return (
                                <MenuItem
                                  key={item.id}
                                  ref={(el) => {
                                    menuItemRefs.current[index] = el;
                                  }}
                                  icon={iconNode}
                                  label={item.label}
                                  trailing={trailingNode}
                                  isFocused={focusedIndex === index}
                                  onClick={() => handleMenuItemAction(item.id)}
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                      e.preventDefault();
                                      handleMenuItemAction(item.id);
                                    } else {
                                      handleKeyboardNav(e, index);
                                    }
                                  }}
                                  onFocus={() => setFocusedIndex(index)}
                                />
                              );
                            })}
                          </motion.div>
                        ) : (
                          <motion.div
                            key={menuLevel}
                            initial={{ opacity: 0, x: 6, scale: 0.97 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 6, scale: 0.97 }}
                            transition={{
                              ...spring,
                              opacity: { duration: 0.06 },
                            }}
                            className="flex flex-col gap-0.5 px-2"
                          >
                            {/* Submenu header */}
                            <div className="flex h-7 items-center overflow-hidden px-2 py-1.5">
                              <span className="truncate text-xs leading-4 font-medium text-(--text-color-secondary)">
                                {activeSubmenuItem?.label}
                              </span>
                            </div>

                            {/* Submenu options */}
                            {activeSubmenuItem?.submenuOptions?.map(
                              (option, index) => (
                                <MenuItem
                                  key={option.id}
                                  ref={(el) => {
                                    menuItemRefs.current[index] = el;
                                  }}
                                  icon={
                                    <Icon
                                      icon={option.icon}
                                      className="size-5"
                                    />
                                  }
                                  label={option.label}
                                  trailing={
                                    activeSubmenuItem.value === option.id ? (
                                      <Icon
                                        icon={checkmarkIcon}
                                        className="size-4 text-(--icon-color-primary)"
                                      />
                                    ) : null
                                  }
                                  isFocused={focusedIndex === index}
                                  onClick={() =>
                                    handleMenuItemAction(option.id)
                                  }
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                      e.preventDefault();
                                      handleMenuItemAction(option.id);
                                    } else {
                                      handleKeyboardNav(e, index);
                                    }
                                  }}
                                  onFocus={() => setFocusedIndex(index)}
                                />
                              ),
                            )}

                            {/* Back button */}
                            <MenuItem
                              ref={(el) => {
                                menuItemRefs.current[
                                  activeSubmenuItem?.submenuOptions?.length ?? 0
                                ] = el;
                              }}
                              icon={
                                <Icon
                                  icon={arrowChevronSingleLeftIcon}
                                  className="size-5"
                                />
                              }
                              label="Back"
                              labelClassName="text-(--text-color-secondary)"
                              trailing={
                                <span className="text-xs text-(--text-color-tertiary)">
                                  ⌘B
                                </span>
                              }
                              isFocused={
                                focusedIndex ===
                                (activeSubmenuItem?.submenuOptions?.length ?? 0)
                              }
                              onClick={goBack}
                              onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                  e.preventDefault();
                                  goBack();
                                } else {
                                  handleKeyboardNav(
                                    e,
                                    activeSubmenuItem?.submenuOptions?.length ??
                                      0,
                                  );
                                }
                              }}
                              onFocus={() =>
                                setFocusedIndex(
                                  activeSubmenuItem?.submenuOptions?.length ??
                                    0,
                                )
                              }
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  trailing?: React.ReactNode;
  labelClassName?: string;
  isFocused?: boolean;
  onClick?: () => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  onFocus?: () => void;
}

const menuItemSpring = {
  type: "spring" as const,
  stiffness: 800,
  damping: 20,
  mass: 0.2,
};

const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>(function MenuItem(
  {
    icon,
    label,
    trailing,
    labelClassName,
    isFocused,
    onClick,
    onKeyDown,
    onFocus,
  },
  ref,
) {
  return (
    <motion.div
      ref={ref}
      tabIndex={0}
      role="menuitem"
      onClick={onClick}
      onKeyDown={onKeyDown}
      onFocus={onFocus}
      whileTap={{ scale: 0.98 }}
      transition={menuItemSpring}
      className={cn(
        "flex h-[30px] cursor-pointer items-start gap-2 rounded-md px-2 py-0 outline-none",
        isFocused
          ? "bg-(--background-color-secondary)"
          : "hover:bg-(--background-color-secondary)",
      )}
    >
      <div className="flex h-7 items-center pr-1.5">{icon}</div>
      <div className="flex grow flex-col pb-0.5">
        <div className="-mb-0.5 flex h-7 items-center gap-2">
          <span
            className={cn(
              "grow truncate text-sm leading-5 tracking-[-0.154px] text-(--text-color-primary)",
              labelClassName,
            )}
          >
            {label}
          </span>
          <div
            className="flex items-center justify-end gap-2.5"
            onClick={(e) => e.stopPropagation()}
          >
            {trailing}
          </div>
        </div>
      </div>
    </motion.div>
  );
});

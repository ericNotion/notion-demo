import { AISidebarAtom } from "@/components/playground-kit/AISidebar/atoms";
import { TemplatesGrid } from "@/components/playground-kit/PrimarySidebar/TemplatesGrid";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IconButton } from "@/components/ui/icon-button";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { arrowChevronSingleDownIcon } from "@nds-icons/arrowChevronSingleDown/default.icon";
import { collectionIcon } from "@nds-icons/collection/default.icon";
import { magnifyingGlassIcon } from "@nds-icons/magnifyingGlass/default.icon";
import { pageEmptyIcon } from "@nds-icons/pageEmpty/default.icon";
import { xMarkIcon } from "@nds-icons/xMark/default.icon";
import { useChat } from "ai/react";
import { useSetAtom } from "jotai";
import Link from "next/link";
import { useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ReasoningChatInput = (props: Record<string, unknown>) => null;

export function NewButton() {
  const [open, setOpen] = useState(false);

  useHotkeys(
    "c",
    () => {
      setOpen(true);
    },
    {
      preventDefault: true,
    },
  );

  const {
    input,
    handleInputChange,
    handleSubmit: baseHandleSubmit,
    status,
  } = useChat({
    api: "/api/chat",
  });

  const handleSubmit = (e: React.FormEvent) => {
    baseHandleSubmit(e, {});
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="mx-1 flex items-center gap-2">
          <Button
            variant="ghost"
            className="dark:bg-elevated dark:shadow-contrast w-full flex-1 gap-1 border-0 bg-white shadow-sm ring-[0.5px] ring-black/5 hover:bg-white dark:border-0 dark:ring-0 dark:ring-white/[0.16]"
          >
            New
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-secondary h-[80vh] max-h-[700px] max-w-[900px] p-0">
        <DialogTitle className="sr-only">Create New</DialogTitle>

        <DialogClose asChild>
          <IconButton
            size="sm"
            variant="ghost"
            className="absolute top-3 right-3 rounded-full"
          >
            <Icon icon={xMarkIcon} />
          </IconButton>
        </DialogClose>

        <div className="flex items-center gap-1.5 px-5 py-4 text-sm font-medium">
          Private
          <Icon icon={arrowChevronSingleDownIcon} size="sm" color="tertiary" />
        </div>

        <div className="scrollbar-hidden mx-auto flex w-full max-w-[700px] flex-1 flex-col overflow-y-auto pt-0 pb-12">
          <div className="h-8 flex-none" />

          <div className="mb-3 px-3">
            <ReasoningChatInput
              input={input}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              status={status}
              placeholder="What do you want to make?"
            />
          </div>

          {/* Top grid of buttons */}
          <div className="grid grid-cols-6 gap-3 px-3">
            <Link
              href="/brian/page/new"
              className="col-span-3"
              onClick={() => setOpen(false)}
            >
              <BigBoiButton>
                <Icon icon={pageEmptyIcon} color="secondary" />

                <h3 className="ml-[3px] text-sm font-medium">Empty page</h3>
              </BigBoiButton>
            </Link>

            <Link
              href="/brian/database/new"
              className="col-span-3"
              onClick={() => setOpen(false)}
            >
              <BigBoiButton>
                <Icon icon={collectionIcon} color="secondary" />

                <h3 className="ml-[3px] text-sm font-medium">Empty database</h3>
              </BigBoiButton>
            </Link>
          </div>

          {/* Templates section */}
          <div className="flex flex-col gap-4 px-3">
            <div className="flex items-center gap-2 pt-12">
              <TemplatesIcon />
              <h2 className="text-lg font-semibold">Made for you</h2>
            </div>

            <div className="sticky top-0 z-10 -mx-2 flex items-center gap-1 px-2 pb-3">
              <Button variant="default" className="rounded-full">
                Databases
              </Button>
              <Button variant="ghost" className="rounded-full">
                Pages
              </Button>
              <IconButton variant="ghost" className="ml-auto">
                <Icon icon={magnifyingGlassIcon} />
              </IconButton>
            </div>

            {/* Template grid */}
            <TemplatesGrid />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function BigBoiButton({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}) {
  const setAISidebarOpen = useSetAtom(AISidebarAtom);

  return (
    <button
      className={cn(
        "flex w-full flex-col gap-3 rounded-xl border p-4 text-left hover:bg-black/[0.04] dark:hover:bg-white/5",
        className,
      )}
      onClick={(e) => {
        onClick?.(e);
        setAISidebarOpen(false);
      }}
    >
      {children}
    </button>
  );
}

function TemplatesIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.62351 26.1415C10.561 26.1416 11.4892 25.9556 12.3543 25.5944C13.2195 25.2332 14.0043 24.7039 14.6634 24.0372C15.3225 23.3705 15.8428 22.5797 16.1941 21.7105C16.5454 20.8413 16.7207 19.911 16.7099 18.9735H14.2091C13.8027 18.9735 13.3899 18.9736 13.0379 18.9448C12.5598 18.9165 12.0921 18.7936 11.6619 18.5832C10.9875 18.2395 10.4391 17.6912 10.0955 17.0168C9.88504 16.5866 9.76213 16.1188 9.73391 15.6407C9.70926 15.2514 9.69965 14.8612 9.70511 14.4711V11.9688C11.2019 11.9882 12.6544 12.4799 13.8551 13.3738C15.0559 14.2677 15.9436 15.518 16.3915 16.9463C15.8849 15.3307 14.8167 13.9497 13.3802 13.0532C11.9437 12.1567 10.2338 11.8039 8.55987 12.0587C6.88589 12.3135 5.35838 13.1591 4.25369 14.4423C3.149 15.7256 2.54009 17.3619 2.53711 19.0552C2.53711 20.935 3.28388 22.7379 4.61314 24.0671C5.94239 25.3964 7.74525 26.1432 9.62511 26.1432L9.62351 26.1415Z"
        fill="#FFB110"
      />
      <path
        d="M20.6442 17.6699C21.385 16.3867 21.7546 15.7451 22.2394 15.5291C22.448 15.4365 22.6736 15.3887 22.9018 15.3887C23.13 15.3887 23.3557 15.4365 23.5642 15.5291C24.0474 15.7451 24.4186 16.3867 25.1578 17.6699L28.4026 23.2891C29.1434 24.5723 29.5146 25.2139 29.4586 25.7403C29.4106 26.1995 29.1706 26.6171 28.7962 26.8891C28.369 27.1995 27.6282 27.1995 26.1466 27.1995H19.6554C18.1754 27.1995 17.4346 27.1995 17.0058 26.8891C16.8211 26.7548 16.6667 26.583 16.5525 26.3851C16.4384 26.1872 16.3672 25.9676 16.3434 25.7403C16.2874 25.2139 16.6586 24.5723 17.3994 23.2891L20.6442 17.6699Z"
        fill="#097FE8"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.6582 7.4078C11.6582 6.4942 11.6582 6.0382 11.8358 5.6894C11.9926 5.3822 12.2422 5.1342 12.5478 4.9774C12.8966 4.7998 13.3526 4.7998 14.2646 4.7998H21.271C22.183 4.7998 22.639 4.7998 22.9878 4.9774C23.2934 5.1342 23.543 5.3822 23.6998 5.6894C23.8758 6.0382 23.8758 6.49421 23.8758 7.40621V13.5694C23.0692 13.3411 22.208 13.4028 21.4422 13.7438C20.7062 14.0702 20.2422 14.6398 19.9382 15.0718C19.5994 15.5754 19.2823 16.0932 18.9878 16.6238L18.9494 16.6926L18.7606 17.0174H14.2646C13.3526 17.0174 12.8966 17.0174 12.5478 16.8414C12.2412 16.6852 11.992 16.436 11.8358 16.1294C11.6598 15.7806 11.6598 15.3246 11.6598 14.411L11.6582 7.4078Z"
        fill="#F64932"
      />
    </svg>
  );
}

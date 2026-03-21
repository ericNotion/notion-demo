import { IconButton } from "@/components/ui/icon-button";
import { Icon } from "@nds-icons";
import { arrowChevronSingleDownFillIcon } from "@nds-icons/arrowChevronSingleDown/fill.icon";

export function ScrollToBottomButton({
  scrollToBottom,
  visible,
}: {
  scrollToBottom: () => void;
  visible: boolean;
}) {
  return (
    <IconButton
      variant="default"
      onClick={scrollToBottom}
      className={`pointer-events-auto absolute left-1/2 -translate-x-1/2 transform rounded-full shadow-lg transition-all duration-200 ease-out ${
        visible
          ? "-translate-y-1 opacity-100"
          : "pointer-events-none translate-y-0 opacity-0"
      }`}
      aria-label="Scroll to bottom"
    >
      <Icon
        icon={arrowChevronSingleDownFillIcon}
        color="inversePrimary"
        weight="bold"
      />
    </IconButton>
  );
}

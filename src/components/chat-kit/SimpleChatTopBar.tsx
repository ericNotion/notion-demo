import { TopBar } from "@/components/chat-kit/TopBar";
import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { Icon } from "@nds-icons";
import { plusIcon } from "@nds-icons/plus/default.icon";
function SimpleChatTopBar() {
  function newChat() {
    window.location.reload();
  }

  return (
    <TopBar className="bg-secondary pl-2">
      <Button variant="ghost">New chat</Button>

      <div className="flex-1" />
      <IconButton onClick={newChat}>
        <Icon icon={plusIcon} />
      </IconButton>
    </TopBar>
  );
}

import { Icon } from "@nds-icons";
import { archiveBoxIcon } from "@nds-icons/archiveBox/default.icon";
import { checkmarkIcon } from "@nds-icons/checkmark/default.icon";
import { filterIcon } from "@nds-icons/filter/default.icon";
import { inboxIcon } from "@nds-icons/inbox/default.icon";

export interface InboxNotification {
  id: string;
  user: string;
  avatarColor: string;
  action: string;
  pageEmoji: string;
  pageTitle: string;
  preview: string;
  previewMention?: string;
  time: string;
}

function UserAvatar({ name, color }: { name: string; color: string }) {
  return (
    <div
      className="flex size-6 shrink-0 items-center justify-center rounded-[12px] text-[10px] font-semibold text-white"
      style={{ backgroundColor: color }}
    >
      {name.charAt(0)}
    </div>
  );
}

function NotificationItem({
  notification,
}: {
  notification: InboxNotification;
}) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col px-4 py-3.5 pr-3">
        <div className="flex gap-2">
          <UserAvatar
            name={notification.user}
            color={notification.avatarColor}
          />
          <div className="flex min-w-0 flex-1 flex-col gap-2 pt-0.5">
            <div className="flex flex-col gap-1">
              <div className="flex items-start gap-2 pr-1.5">
                <p className="text-primary min-w-0 flex-1 truncate text-sm/5 font-medium">
                  <span>{notification.user} </span>
                  <span>{notification.action}</span>
                </p>
                <span className="text-tertiary shrink-0 pt-px text-xs/[15px]">
                  {notification.time}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xs">{notification.pageEmoji}</span>
                <span className="text-primary text-sm/[16.8px] font-medium underline decoration-current/20 underline-offset-2">
                  {notification.pageTitle}
                </span>
              </div>
            </div>
            <p className="text-tertiary text-sm/5">
              {notification.previewMention ? (
                <>
                  <span className="text-yellow-secondary font-medium">
                    @{notification.previewMention}
                  </span>
                  <span>
                    {
                      notification.preview.split(
                        `@${notification.previewMention}`,
                      )[1]
                    }
                  </span>
                </>
              ) : (
                notification.preview
              )}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-tertiary-translucent mx-4 h-px" />
    </div>
  );
}

interface InboxContentProps {
  notifications?: InboxNotification[];
}

export function InboxContent({ notifications }: InboxContentProps) {
  if (!notifications || notifications.length === 0) {
    return (
      <div className="flex min-h-[220px] grow flex-col items-center justify-center overflow-hidden px-5 text-center">
        <div className="pb-1.5">
          <Icon icon={inboxIcon} size={24} color="secondary" />
        </div>
        <p className="text-primary max-w-[380px] text-sm/5 font-medium">
          You&apos;re all caught up
        </p>
        <p className="text-tertiary mt-0.5 mb-1 max-w-[380px] text-xs/4">
          New notifications will appear here
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-h-0 grow flex-col">
      <div className="flex items-center px-2">
        <div className="px-2 py-1.5">
          <span className="text-tertiary text-xs/4 font-medium">Today</span>
        </div>
        <div className="flex flex-1" />
        <div className="flex items-center gap-0.5">
          <button
            type="button"
            className="hover:bg-secondary-translucent flex size-6 items-center justify-center rounded-[6px]"
          >
            <Icon icon={archiveBoxIcon} color="secondary" />
          </button>
          <button
            type="button"
            className="hover:bg-secondary-translucent flex size-6 items-center justify-center rounded-[6px]"
          >
            <Icon icon={checkmarkIcon} color="secondary" />
          </button>
          <button
            type="button"
            className="hover:bg-secondary-translucent flex size-6 items-center justify-center rounded-[6px]"
          >
            <Icon icon={filterIcon} color="secondary" />
          </button>
        </div>
      </div>
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </div>
  );
}

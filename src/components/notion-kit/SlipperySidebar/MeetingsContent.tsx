import { notionCalendarIcon } from "@/nds-icons/src/notionCalendar/default.icon";
import { Icon } from "@nds-icons";
import { EventItem } from "./EventItem";

export interface MeetingEvent {
  id: string;
  title: string;
  timeRange?: string;
  color?: string;
  href?: string;
}

export interface MeetingGroup {
  label: string;
  events: MeetingEvent[];
  isUpcoming?: boolean;
}

function MeetingNoteItem({
  title,
  timeRange,
  onClick,
}: {
  title: string;
  timeRange?: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="hover:bg-secondary-translucent flex h-[30px] w-full cursor-pointer items-center gap-2 rounded-[6px] px-2 py-1 text-left"
    >
      <div className="flex size-6 shrink-0 items-center justify-center">
        <Icon icon={notionCalendarIcon} size={20} />
      </div>
      <span className="text-primary min-w-0 flex-1 truncate text-sm/5 font-medium">
        {title}
      </span>
      {timeRange && (
        <span className="text-tertiary shrink-0 text-xs/4 font-medium">
          {timeRange}
        </span>
      )}
    </button>
  );
}

interface MeetingsContentProps {
  groups: MeetingGroup[];
  onEventClick?: (event: MeetingEvent) => void;
}

export function MeetingsContent({
  groups,
  onEventClick,
}: MeetingsContentProps) {
  return (
    <div className="flex min-h-0 grow flex-col overflow-y-auto px-2 pt-1.5">
      {groups.map((group, i) => (
        <div
          key={group.label}
          className={`flex flex-col ${i < groups.length - 1 ? "pb-3" : ""}`}
        >
          <div className="px-2 py-1.5">
            <span className="text-tertiary text-xs/4 font-medium">
              {group.label}
            </span>
          </div>
          <div className="flex flex-col">
            {group.events.map((event) =>
              group.isUpcoming ? (
                <EventItem
                  key={event.id}
                  title={event.title}
                  timeRange={event.timeRange ?? ""}
                  color={event.color}
                  onClick={() => onEventClick?.(event)}
                />
              ) : (
                <MeetingNoteItem
                  key={event.id}
                  title={event.title}
                  timeRange={event.timeRange}
                  onClick={() => onEventClick?.(event)}
                />
              ),
            )}
            {group.isUpcoming && (
              <button
                type="button"
                className="hover:bg-secondary-translucent flex h-[30px] w-full cursor-pointer items-center gap-2 rounded-[6px] px-2 py-1 text-left"
              >
                <span className="flex size-6 shrink-0 items-center justify-center">
                  <span className="text-tertiary text-xs">···</span>
                </span>
                <span className="text-tertiary text-sm/5 font-medium">
                  More
                </span>
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

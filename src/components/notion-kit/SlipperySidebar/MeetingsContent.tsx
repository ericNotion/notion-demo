import { notionCalendarIcon } from "@/nds-icons/src/notionCalendar/default.icon";
import { Icon } from "@nds-icons";
import { EventItem } from "./EventItem";

export interface MeetingEvent {
  id: string;
  title: string;
  timeRange: string;
  color?: string;
}

export interface MeetingGroup {
  label: string;
  events: MeetingEvent[];
  isUpcoming?: boolean;
}

function MeetingNoteItem({
  title,
  timeRange,
}: {
  title: string;
  timeRange: string;
}) {
  return (
    <div className="hover:bg-secondary-translucent flex h-[30px] cursor-pointer items-center gap-2 rounded-[6px] px-2 py-1">
      <div className="flex size-6 shrink-0 items-center justify-center">
        <Icon icon={notionCalendarIcon} size={20} />
      </div>
      <span className="text-primary min-w-0 flex-1 truncate text-sm/5 font-medium">
        {title}
      </span>
      <span className="text-tertiary shrink-0 text-xs/4 font-medium">
        {timeRange}
      </span>
    </div>
  );
}

interface MeetingsContentProps {
  groups: MeetingGroup[];
}

export function MeetingsContent({ groups }: MeetingsContentProps) {
  return (
    <div className="flex min-h-0 grow flex-col px-2 pt-1.5">
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
                  timeRange={event.timeRange}
                  color={event.color}
                />
              ) : (
                <MeetingNoteItem
                  key={event.id}
                  title={event.title}
                  timeRange={event.timeRange}
                />
              ),
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

import { IconProps } from "./types";

export function NotionCalendarIcon({ size = 20 }: IconProps) {
  return (
    <img
      src="/img/notionCalendar.png"
      alt="Notion Calendar"
      width={size}
      height={size}
      className="shrink-0"
    />
  );
}

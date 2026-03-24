import Image from "next/image";
import { IconProps } from "./types";

export function NotionCalendarIcon({ size = 20 }: IconProps) {
  return (
    <Image
      src="/eric/notionCalendar.png"
      alt="Notion Calendar"
      width={size}
      height={size}
      className="shrink-0"
    />
  );
}

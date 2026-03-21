import Image from "next/image";

interface AgentItemProps {
  name: string;
  color?: string;
  avatar?: string;
  onClick?: () => void;
}

export function AgentItem({ name, color, avatar, onClick }: AgentItemProps) {
  return (
    <button
      type="button"
      className="hover:bg-secondary-translucent flex h-[30px] w-full cursor-pointer items-center gap-2 rounded-[6px] px-2 py-1"
      onClick={onClick}
    >
      <span className="flex size-6 shrink-0 items-center justify-center">
        {avatar ? (
          <Image
            src={avatar}
            alt=""
            width={20}
            height={20}
            className="size-5 shrink-0 rounded-full"
          />
        ) : (
          <div
            className="size-5 shrink-0 rounded-full"
            style={{ backgroundColor: color }}
          />
        )}
      </span>
      <span className="text-secondary min-w-0 flex-1 truncate text-left text-sm/5 font-medium">
        {name}
      </span>
    </button>
  );
}

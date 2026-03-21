interface RecentItemProps {
  emoji: string;
  label: string;
  onClick?: () => void;
}

export function RecentItem({ emoji, label, onClick }: RecentItemProps) {
  return (
    <button
      type="button"
      className="hover:bg-secondary-translucent flex h-[30px] w-full cursor-pointer items-center gap-2 rounded-[6px] px-2 py-1"
      onClick={onClick}
    >
      <span className="flex size-6 shrink-0 items-center justify-center text-base/5">
        {emoji}
      </span>
      <span className="text-primary min-w-0 flex-1 truncate text-left text-sm/5 font-medium">
        {label}
      </span>
    </button>
  );
}

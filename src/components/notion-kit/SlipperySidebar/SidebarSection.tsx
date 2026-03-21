interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
}

export function SidebarSection({ title, children }: SidebarSectionProps) {
  return (
    <div className="mb-4 flex flex-col">
      <div className="flex h-6 items-center px-2.5">
        <span className="text-tertiary text-xs font-medium">{title}</span>
      </div>
      <div className="flex flex-col pt-1">{children}</div>
    </div>
  );
}

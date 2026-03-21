export function getMonthLabel(date: Date): string {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  const prototypeMonth = date.getMonth();
  const prototypeYear = date.getFullYear();

  if (prototypeYear === currentYear && prototypeMonth === currentMonth) {
    return "This month";
  }

  return date.toLocaleDateString("en-US", {
    month: "long",
    year: prototypeYear < currentYear ? "numeric" : undefined,
  });
}

export function sortMonthGroups(
  a: {
    label: string;
    prototypes: Array<{ createdAt: Date; updatedAt?: Date }>;
  },
  b: {
    label: string;
    prototypes: Array<{ createdAt: Date; updatedAt?: Date }>;
  },
): number {
  if (a.label === "This month") return -1;
  if (b.label === "This month") return 1;

  // For other months, sort by the first prototype's date in each group
  // Use updatedAt || createdAt to match the grouping logic in PrototypeTable
  if (a.prototypes.length > 0 && b.prototypes.length > 0) {
    const getGroupDate = (p: { createdAt: Date; updatedAt?: Date }) =>
      p.updatedAt || p.createdAt;
    return (
      getGroupDate(b.prototypes[0]).getTime() -
      getGroupDate(a.prototypes[0]).getTime()
    );
  }

  return 0;
}

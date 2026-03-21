export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove non-word chars (except spaces and dashes)
    .replace(/[\s_-]+/g, "-") // Replace spaces and underscores with single dash
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing dashes
}

export function generateUniqueSlug(
  baseName: string,
  existingSlugs: string[],
): string {
  const slug = slugify(baseName);
  let counter = 1;
  let uniqueSlug = slug;

  while (existingSlugs.includes(uniqueSlug)) {
    uniqueSlug = `${slug}-${counter}`;
    counter++;
  }

  return uniqueSlug;
}

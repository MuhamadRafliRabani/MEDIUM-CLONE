export function toSnakeCase(url: string): string {
  if (!url) return "";
  return url?.replace(/\s+/g, "-");
}

export function formatInr(value) {
  return `₹${Number(value).toLocaleString("en-IN")}`;
}

export const formatDate = (date: string | null | undefined) => {
  if (!date) return;
  const TIME = new Date(date);

  const day = String(TIME.getDate()).padStart(2, "0");
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const month = monthNames[TIME.getMonth()];
  const year = String(TIME.getFullYear()).slice(-2);

  return `${month} ${year}`;
};

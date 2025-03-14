export const formatDate = (date: string | null | undefined) => {
  if (!date) return;
  const TIME = new Date(date);

  const day = String(TIME.getDate()).padStart(2, "0");
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = monthNames[TIME.getMonth()];
  const year = String(TIME.getFullYear());

  return `${month} ${day}, ${year}`;
};

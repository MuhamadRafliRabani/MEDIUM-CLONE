export const formatDate = (date: string | null | undefined) => {
  if (!date) return;
  const TIME = new Date(date);

  const day = String(TIME.getDate()).padStart(2, "0");
  const monthNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const month = monthNames[TIME.getMonth()];
  const year = String(TIME.getFullYear()).slice(-2);

  return `${day} ${month} ${year}`;
};

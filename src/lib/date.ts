export const getDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const monthNumber = date.getMonth() + 1;
  const day = String(date.getDate()).padStart(2, "0");
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
  const month = monthNames[monthNumber];

  const tgl = `${month}-${day}`;
  return tgl;
};

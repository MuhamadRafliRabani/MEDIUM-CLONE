const getUserFromLocalStorage = () => {
  const storedData = localStorage.getItem("user");

  if (!storedData) return null; // Jika tidak ada data, return null

  const parsedData = JSON.parse(storedData);
  const now = new Date().getTime();

  if (now > parsedData.expiresAt) {
    localStorage.removeItem("user"); // Hapus jika expired
    return null;
  }

  return parsedData.user; // Return user jika belum expired
};

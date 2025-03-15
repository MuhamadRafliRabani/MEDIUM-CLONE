const saveUserToLocalStorage = (userData: any) => {
  const now = new Date().getTime(); // Waktu sekarang dalam milidetik
  const expiresIn = now + 2 * 24 * 60 * 60 * 1000; // 2 hari dalam milidetik

  const dataToStore = {
    user: userData,
    expiresAt: expiresIn,
  };

  localStorage.setItem("user", JSON.stringify(dataToStore));
};

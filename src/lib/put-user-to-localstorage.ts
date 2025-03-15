const saveUserToLocalStorage = (userData: any) => {
  const now = new Date().getTime();
  const expiresIn = now + 2 * 24 * 60 * 60 * 1000;

  const dataToStore = {
    user: userData,
    expiresAt: expiresIn,
  };

  localStorage.setItem("user", JSON.stringify(dataToStore));
};

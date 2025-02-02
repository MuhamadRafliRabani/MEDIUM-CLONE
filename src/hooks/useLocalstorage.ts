import { useState, useEffect } from "react";

export function useLocalStorage(key: string, initialValue: any) {
  // State untuk menyimpan nilai
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        console.error("Error reading localStorage:", error);
        return initialValue;
      }
    }
    return initialValue;
  });

  // Fungsi untuk mengupdate localStorage
  const setValue = (value: any) => {
    try {
      setStoredValue(value);
      if (typeof window !== "undefined") {
        localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.error("Error setting localStorage:", error);
    }
  };

  return [storedValue, setValue];
}

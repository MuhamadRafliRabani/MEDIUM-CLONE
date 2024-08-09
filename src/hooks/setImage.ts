import { useState } from "react";

export const useHandleFileChange = () => {
  const [file, setFile] = useState<File | null>(null);
  const [image, setImage] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setImage(URL.createObjectURL(selectedFile));
    }
  };

  return {
    file,
    image,
    handleFileChange,
  };
};

export default useHandleFileChange;

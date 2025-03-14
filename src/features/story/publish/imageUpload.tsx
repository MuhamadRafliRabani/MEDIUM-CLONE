import useHandleFileChange from "@/hooks/setImage";
import { ImageUploadProps } from "@/lib";
import Image from "next/image";
import { useEffect, useRef } from "react";

const ImageUpload = ({ setImage }: ImageUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { file, handleFileChange, image } = useHandleFileChange();

  useEffect(() => {
    if (file) {
      setImage("image", file);
    }
  }, [setImage, file]);

  return (
    <div className="flex flex-col items-center">
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        onChange={handleFileChange}
      />
      <label
        onClick={() => fileInputRef.current?.click()}
        className={`flex h-[200px] w-full cursor-pointer items-center justify-center bg-gray-100 ${
          !image && "border border-dashed"
        }`}
      >
        {image ? (
          <Image
            src={image}
            alt="Preview"
            height={200}
            width={150}
            className="h-[200px] w-full border border-gray-300 object-cover"
          />
        ) : (
          <span>Choose file</span>
        )}
      </label>
    </div>
  );
};

export default ImageUpload;

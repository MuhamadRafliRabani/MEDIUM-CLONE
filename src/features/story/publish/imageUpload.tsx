import { usehandleFileChange } from "@/hooks/setImage";

const FileUpload = ({ image, handleFileChange }: any) => {
  return (
    <div className="flex flex-col items-center">
      <input
        type="file"
        name="file"
        id="file"
        className="hidden"
        accept="image/*"
        onChange={(e) => handleFileChange(e)}
      />
      <label
        htmlFor="file"
        className={`flex h-[200px] w-full cursor-pointer items-center justify-center bg-[#FAFAFA] text-gray-600 ${
          !image && "border border-dashed"
        }`}
      >
        {image ? (
          <img
            src={image}
            alt="Selected"
            className="h-[200px] w-full border border-gray-300 object-cover"
          />
        ) : (
          <span>Choose file</span>
        )}
      </label>
    </div>
  );
};

export default FileUpload;

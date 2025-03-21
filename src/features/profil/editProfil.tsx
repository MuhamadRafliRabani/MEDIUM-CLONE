import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowBendRightUp, SignOut } from "@phosphor-icons/react";
import Image from "next/image";

const EditProfil: React.FC = () => {
  return (
    <form onSubmit={() => {}} className="mx-auto w-[90%] md:w-2/5 md:space-y-3">
      <div className="flex items-center justify-center gap-2">
        <label
          htmlFor="file"
          className="flex h-[200px] w-full cursor-pointer items-center justify-center md:w-fit"
        >
          <Image
            src={"/profil.jpg"}
            height={150}
            width={150}
            alt="Selected"
            className="size-32 rounded-full object-cover shadow-sm md:size-[150px]"
          />
        </label>
        <div className="flex flex-col justify-start gap-1 md:gap-0">
          <div className="flex items-center justify-start">
            <div className="relative space-x-2">
              <Input
                type="file"
                name="file"
                id="file"
                className="hidden"
                accept="image/*"
              />
              <label htmlFor="file" className="text-green-400 hover:underline">
                Update
              </label>
            </div>
            <Button className="text-red-500" variant="link">
              Remove
            </Button>
          </div>
          <p className="w-full text-sm md:w-3/5 md:ps-2">
            Recommended: Square JPG, PNG, or GIF, at least 1,000 pixels per
            side.
          </p>
        </div>
      </div>

      <div className="w-full space-y-2 text-sm font-light md:space-y-4">
        <div>
          <label className="font-light">Name</label>
          <Input className="mb-1 bg-slate-100" name="name" />
          <p className="text-end text-sm">6/50</p>
        </div>
        <div>
          <label className="">Pronouns</label>
          <Input className="mb-1 bg-slate-100" name="pronouns" />
          <p className="text-end text-sm">0/4</p>
        </div>
        <div>
          <label className="">Short bio</label>
          <Input className="mb-1 bg-slate-100" name="short_bio" />
          <p className="text-end text-sm">0/160</p>
        </div>
      </div>

      <div className="w-full">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold">About Page</h1>
          <ArrowBendRightUp size={20} weight="light" />
        </div>
        <p className="pb-2 text-sm md:py-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          quam soluta dicta accusantium sunt praesentium delectus blanditiis
          quod quisquam totam.
        </p>
      </div>

      <div className="flex w-full items-center justify-between gap-4">
        <Button>
          <SignOut className="mr-2 size-4" /> Logout
        </Button>
        <Button
          type="submit"
          variant="outline"
          className="border-green-400 text-green-400"
        >
          Save
        </Button>
      </div>
    </form>
  );
};

export default EditProfil;

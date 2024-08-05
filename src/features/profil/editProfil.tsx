import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowBendRightUp } from "@phosphor-icons/react";
import Image from "next/image";

const EditProfil = () => {
  return (
    <div className="mx-auto w-2/5 space-y-4">
      <div className="flex items-center gap-2">
        <Image
          src="/profil.jpg"
          alt=""
          width={200}
          height={200}
          className="rounded-full"
        />
        <div className="flex flex-col justify-start gap-1">
          <div className="flex items-center justify-start">
            <Button className="ps-2 text-green-400" variant="link">
              Update
            </Button>
            <Button className="ps-2 text-red-500" variant="link">
              Remove
            </Button>
          </div>
          <p className="w-4/5 text-sm">
            Recommended: Square JPG, PNG, or GIF, at least 1,000 pixels per
            side.
          </p>
        </div>
      </div>
      <form className="w-full space-y-5 text-sm font-light">
        <div className="">
          <label className="font-light">Name</label>
          <Input className="mb-1 bg-slate-100" />
          <p className="text-end text-sm">6/50</p>
        </div>
        <div className="">
          <label className="">Pronouns</label>
          <Input className="mb-1 bg-slate-100" />
          <p className="text-end text-sm">0/4</p>
        </div>
        <div className="">
          <label className="">Short bio</label>
          <Input className="mb-1 bg-slate-100" />
          <p className="text-end text-sm">0/160</p>
        </div>
      </form>
      <div className="w-full">
        <div className="flex items-center justify-between">
          <h1>About Page</h1>
          <ArrowBendRightUp size={20} weight="light" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          quam soluta dicta accusantium sunt praesentium delectus blanditiis
          quod quisquam totam.
        </p>
      </div>
      <div className="flex w-full items-center justify-end gap-4 text-green-400">
        <Button variant="outline" className="border-slate-400 text-primary">
          Cencel
        </Button>
        <Button variant="outline" className="border-green-400">
          Save
        </Button>
      </div>
    </div>
  );
};

export default EditProfil;

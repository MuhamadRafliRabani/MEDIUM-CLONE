import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useHandleFileChange from "@/hooks/setImage";
import { useUser, useUserCustom } from "@/hooks/store/useUser";
import { ArrowBendRightUp } from "@phosphor-icons/react";
import { useFormik } from "formik";
import * as yup from "yup";
import { SignOut } from "../auth/auth";
import { toast } from "sonner";
import { useSetProfil } from "./useEditProfile";
import { useRouter } from "next/router";

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(6, "Minimum 6 characters")
    .max(50, "Maximum 50 characters")
    .required("Name is required"),
  pronouns: yup
    .string()
    .min(5, "Minimum 5 character")
    .max(10, "Maximum 10 characters")
    .required("Pronouns are required"),
  short_bio: yup
    .string()
    .min(1, "Minimum 1 character")
    .max(160, "Maximum 160 characters")
    .required("Short bio is required"),
});

const EditProfil: React.FC = () => {
  const { user } = useUser();
  const { mutate, data } = useSetProfil();
  const Router = useRouter();
  const { user: user_custom } = useUserCustom();
  const { file, image, handleFileChange } = useHandleFileChange();

  const formik = useFormik({
    initialValues: {
      name: "",
      pronouns: "",
      short_bio: "",
    },
    validationSchema,
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("pronouns", values.pronouns);
      formData.append("short_bio", values.short_bio);
      formData.append("image", file || "");
      formData.append("email", user?.email || user_custom.email);
      formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });

      mutate(formData, {
        onSuccess: () => {
          toast.success("Profile updated successfully!");

          console.log("update succsse");
        },
        onError: (error) => {
          toast.error("Failed to update profile. Please try again.");
          console.log("update error");
        },
      });
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="mx-auto w-[90%] md:w-2/5 md:space-y-3"
    >
      <div className="flex items-center justify-center gap-2">
        <label
          htmlFor="file"
          className="flex h-[200px] w-full cursor-pointer items-center justify-center md:w-fit"
        >
          <img
            src={
              image ||
              user_custom?.profil_img ||
              user?.photoURL ||
              "/profil.jpg"
            }
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
                onChange={handleFileChange}
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
          <Input
            className="mb-1 bg-slate-100"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-sm text-red-500">{formik.errors.name}</div>
          ) : null}
          <p className="text-end text-sm">6/50</p>
        </div>
        <div>
          <label className="">Pronouns</label>
          <Input
            className="mb-1 bg-slate-100"
            name="pronouns"
            value={formik.values.pronouns}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.pronouns && formik.errors.pronouns ? (
            <div className="text-sm text-red-500">{formik.errors.pronouns}</div>
          ) : null}
          <p className="text-end text-sm">0/4</p>
        </div>
        <div>
          <label className="">Short bio</label>
          <Input
            className="mb-1 bg-slate-100"
            name="short_bio"
            value={formik.values.short_bio}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.short_bio && formik.errors.short_bio ? (
            <div className="text-sm text-red-500">
              {formik.errors.short_bio}
            </div>
          ) : null}
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

      <div className="flex w-full items-center justify-end gap-4 text-green-400">
        <Button type="submit" variant="outline" className="border-green-400">
          Save
        </Button>
      </div>
    </form>
  );
};

export default EditProfil;

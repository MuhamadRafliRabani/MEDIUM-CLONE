import { useCallback, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Topic_list } from "@/data/Topic_list";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { InitialValue } from "@/lib";
import ImageUpload from "./imageUpload";
import { PublishConfiguration } from "./publish-configure";
import { Checkbox } from "@/components/ui/checkbox";

const FormPublish = ({ title, story }: InitialValue) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  // publish Configurations
  const { isPending, useFormik } = PublishConfiguration(title, story);

  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    errors,
    touched,
  } = useFormik;
  //end  publish Configurations

  const handleDisable = useCallback(() => {
    const { title, description, category } = values;
    setIsDisabled(!(title && description && category && values.image));
  }, [values]);

  useEffect(() => {
    handleDisable();
  }, [handleDisable]);

  return (
    <form
      onSubmit={handleSubmit}
      className="container mx-auto flex flex-col items-center justify-center gap-6 px-4 md:flex-row md:gap-8"
    >
      {/* Left Column */}
      <div className="flex w-full flex-col gap-4 md:w-[500px]">
        <label className="text-xl font-bold text-black">Story Preview</label>
        <ImageUpload setImage={setFieldValue} />

        <Input
          name="title"
          placeholder="Write a title"
          className="border-b border-gray-400 text-lg font-extrabold"
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.title && errors.title && (
          <div className="text-red-500">{errors.title}</div>
        )}

        <Input
          name="description"
          placeholder="Write a description..."
          className="border-b border-gray-400 text-gray-600"
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.description && errors.description && (
          <div className="text-red-500">{errors.description}</div>
        )}

        <p className="text-sm">
          <span className="font-bold">Note:</span> Changes here will affect how
          your story appears in public places.
        </p>
      </div>

      {/* Right Column */}
      <div className="flex w-full flex-col gap-4 md:-mt-16 md:w-[500px]">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="member-only"
            checked={values.member_only}
            onCheckedChange={(checked) => setFieldValue("member_only", checked)}
          />
          <label
            htmlFor="member-only"
            className="text-sm font-medium leading-none"
          >
            Members Only
          </label>
        </div>

        <p>
          Add or change topics (up to 5) so readers know what your story is
          about
        </p>

        <Select
          value={values.category}
          onValueChange={(value) => setFieldValue("category", value)}
        >
          <SelectTrigger className="w-full focus:ring-0">
            <SelectValue placeholder="Topic" />
          </SelectTrigger>
          <SelectContent className="max-h-48 overflow-y-auto">
            {Topic_list.map((article, i) => (
              <SelectItem key={i} value={article}>
                {article}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <p>
          <span className="cursor-pointer underline">Learn more</span> about
          what happens to your post when you publish.
        </p>

        <div className="flex items-center gap-4">
          <Button
            type="submit"
            className="rounded-md bg-green-400 text-white hover:bg-green-500"
            disabled={isDisabled || isPending}
          >
            {isPending ? "Publishing..." : "Publish"}
          </Button>
          <p>Schedule for later</p>
        </div>
      </div>
    </form>
  );
};

export default FormPublish;

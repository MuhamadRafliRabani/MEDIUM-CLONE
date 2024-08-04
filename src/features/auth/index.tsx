import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { GoogleLogo } from "@phosphor-icons/react";
import { Github } from "lucide-react";
import { useSignWithEmail } from "./useSignWithEmail";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/store/useUser";
import { authgoogle } from "./auth";
import { setCookie } from "nookies";

interface FormValues {
  email: string;
  password: string;
}

const validationSchema = Yup.object<FormValues>({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
});

const FormCard: React.FC = () => {
  const { mutate } = useSignWithEmail();
  const { setUser } = useUser();
  const router = useRouter();

  const handleGoogleAuth = async () => {
    try {
      const user = await authgoogle();
      localStorage.setItem("user", JSON.stringify(user));
      setCookie(null, "user", JSON.stringify(user), {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
      setUser(user);
      router.push("/");
    } catch (error) {
      console.error("Error during Google authentication:", error);
    }
  };

  const formik = useFormik<FormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (
      values: FormValues,
      { resetForm }: FormikHelpers<FormValues>,
    ) => {
      console.log(values);
      setUser(values);
      router.back();
      // mutate(values);
      resetForm();
    },
  });

  return (
    <Card className="mx-auto my-8 w-full max-w-md shadow-md">
      <CardHeader>
        <CardTitle>Form Card</CardTitle>
        <CardDescription>Silakan isi form di bawah ini</CardDescription>
        <div className="flex w-full items-center justify-center gap-2 pt-4">
          <Button className="w-full" variant="outline">
            <Github className="mr-2 size-4" /> Github
          </Button>
          <Button
            className="w-full"
            variant="outline"
            onClick={handleGoogleAuth}
          >
            <GoogleLogo className="mr-2 size-4" /> Google
          </Button>
        </div>
      </CardHeader>
      <div className="-mt-2 mb-2 flex w-full items-center justify-center gap-2 text-sm">
        <hr className="w-full" />
        <p className="w-fit whitespace-nowrap">OR CONTINUE WITH</p>
        <hr className="w-full" />
      </div>
      <CardContent>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Masukkan email Anda"
              {...formik.getFieldProps("email")}
              className="mt-1 block w-full"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500">{formik.errors.email}</div>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Masukkan password Anda"
              {...formik.getFieldProps("password")}
              className="mt-1 block w-full"
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500">{formik.errors.password}</div>
            )}
          </div>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default FormCard;

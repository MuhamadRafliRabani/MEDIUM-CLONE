import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { GoogleLogo } from "@phosphor-icons/react";
import { Github } from "lucide-react";
import { useSignWithEmail } from "./useSignWithEmail";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/store/useUser";
import { authgoogle } from "./auth";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Password minimal 8 characters")
    .required("Required"),
});

const FormCard = () => {
  const { mutate, data } = useSignWithEmail();
  const { setUser } = useUser();
  const router = useRouter();

  const authGoogle = async () => {
    try {
      const user = await authgoogle();
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
      router.push("/");
    } catch (error) {
      console.error("Error during Google authentication:", error);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      setUser(values);
      router.back();
      // mutate(values);
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
          <Button className="w-full" variant="outline" onClick={authGoogle}>
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
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Input
              type="email"
              placeholder="Masukkan email Anda"
              value={formik.values.email}
              onChange={formik.handleChange}
              name="email"
              className="mt-1 block w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <Input
              type="password"
              placeholder="Masukkan password Anda"
              value={formik.values.password}
              onChange={formik.handleChange}
              name="password"
              className="mt-1 block w-full"
            />
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

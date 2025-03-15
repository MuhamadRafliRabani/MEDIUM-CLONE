import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { GoogleLogo, GithubLogo } from "@phosphor-icons/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useUser } from "@/hooks/store/zustand";
import { useState } from "react";
import { useHandlePost } from "@/lib/useHandlePost";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export type FormValues = {
  email: string;
  password: string;
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
});

const FormCard: React.FC = () => {
  const { setUser } = useUser();
  const [isSignUp, setIsSignUp] = useState<boolean>(true);
  const route = useRouter();
  const {
    mutate: auth,
    isIdle,

    error,
  } = useHandlePost(`/auth/email/${isSignUp ? "signUp" : "signIn"}`);

  const formik = useFormik<FormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: () => {
      auth(
        {
          email: formik.values.email,
          password: formik.values.password,
        },
        {
          onSuccess: (data: any) => {
            if (isSignUp) {
              toast.success("Sign Up Success");

              setUser(data.data.user.user);

              toast.info("please check your email to verify your account");

              route.push("/");

              saveUserToLocalStorage(data.data.user.user);

              return null;
            }

            toast.success("Sign In Success");

            setUser(data.data.user.user);

            route.push("/");

            saveUserToLocalStorage(data.data.user.user);

            return null;
          },
          onError: () => {
            toast.error(error?.message);
            return null;
          },
        },
      );
    },
  });

  async function hitOauthProvider(provider: string) {
    try {
      window.location.href = `http://localhost:2000/Oauth/${provider}`;
    } catch (error: any) {
      console.error("Failed to fetch:", error.message);
    }
  }

  return (
    <Card className="mx-auto mt-24 w-11/12 max-w-sm shadow-md md:mt-20 md:w-full md:max-w-md">
      <CardHeader>
        <CardTitle>{isSignUp ? "Sign Up" : "Sign In"}</CardTitle>
        <CardDescription>Please fill in the form below</CardDescription>
        <div className="flex w-full items-center justify-center gap-2 pt-4">
          <Button
            onClick={() => hitOauthProvider("github")}
            className="w-full cursor-pointer"
            variant="outline"
          >
            <GithubLogo className="mr-2 size-4" /> Github
          </Button>
          <Button className="w-full cursor-pointer" variant="outline">
            <GoogleLogo className="mr-2 size-4" /> Google
          </Button>
        </div>
      </CardHeader>
      <div className="-mt-2 mb-2 flex w-full items-center justify-center gap-2 text-sm">
        <hr className="w-full" />
        <p className="w-fit whitespace-nowrap text-[0.83rem] md:text-base">
          OR CONTINUE WITH
        </p>
        <hr className="w-full" />
      </div>
      <CardContent>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="pb-1 text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...formik.getFieldProps("email")}
              className="w-full"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500">{formik.errors.email}</div>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="pb-1 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              {...formik.getFieldProps("password")}
              className="w-full"
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500">{formik.errors.password}</div>
            )}
          </div>
          <p>
            {isSignUp ? "allready have account?" : "does`t have account?"}{" "}
            <span
              className="cursor-pointer text-blue-700 hover:underline"
              onClick={() => setIsSignUp((prev) => !prev)}
            >
              {isSignUp ? "login" : "signUp"}
            </span>
          </p>
          <Button type="submit" disabled={!isIdle} className="w-full">
            {!isIdle ? (
              <div
                className="text-surface me-1.5 inline-block size-4 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-primary"
                role="status"
              ></div>
            ) : null}
            {isSignUp ? " sign Up" : " sign In"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default FormCard;

import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { FormValues } from ".";
import { toast } from "sonner";
import { NextRouter } from "next/router";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}
const auth = getAuth();
auth.languageCode = "en";
const provider = new GoogleAuthProvider();

export const authgoogle = async (router: NextRouter) => {
  try {
    const result = await signInWithPopup(auth, provider);
    toast.success("berhasil login");
    router.push("/");
    return result.user;
  } catch (error) {
    console.error("Error during Google authentication:", error);
    throw error;
  }
};

export const signUp = async (value: FormValues, router: NextRouter) => {
  const auth = getAuth();
  const { email, password } = value;

  try {
    console.log({ msg: "ini signup", email, password });

    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    toast.success("berhasil login");
    router.push("/");
    return user;
  } catch (error: any) {
    console.error("Error sign-up:", error.message);
    toast.error("email sudah digunakan silahkan sign In!");
    return error;
  }
};

export const signIn = async (value: FormValues, router: NextRouter) => {
  const auth = getAuth();
  const { email, password } = value;

  try {
    console.log({ msg: "ini signin", email, password });
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    toast.success("berhasil login");
    router.push("/");

    return user;
  } catch (error) {
    console.log("Error during sign-in:", error);
    toast.error("email atau password salah!");
    return error;
  }
};

export const SignOut = async (router: NextRouter) => {
  const auth = getAuth();

  try {
    await signOut(auth);
    toast.success("berhasil logout");
    router.push("/");
  } catch (error) {
    console.error("Error during sign-out:", error);
    toast.success("gagal logout");
  }
};

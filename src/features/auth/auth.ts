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
  apiKey: "AIzaSyBG4mc149kHv_Gm4vpwvRkYYAGi5DN7Le4",
  authDomain: "medium-clone-c7b71.firebaseapp.com",
  projectId: "medium-clone-c7b71",
  storageBucket: "medium-clone-c7b71.appspot.com",
  messagingSenderId: "837344483684",
  appId: "1:837344483684:web:37303a2d977b3a6aa48271",
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
    toast.error("email sudah digunakan silahkan sign in");
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
    toast.error("email sudah digunakan silahkan sign in");
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

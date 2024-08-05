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

export const authgoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("Error during Google authentication:", error);
    throw error;
  }
};

export const signUp = async (value: FormValues) => {
  const auth = getAuth();
  const { email, password } = value;
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return user;
  } catch (error) {
    console.error("Error during sign-up:", error);
    throw error;
  }
};

export const signIn = async (value: FormValues) => {
  const auth = getAuth();
  const { email, password } = value;
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    console.error("Error during sign-in:", error);
    throw error;
  }
};

export const SignOut = async () => {
  const auth = getAuth();
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error during sign-out:", error);
  }
};

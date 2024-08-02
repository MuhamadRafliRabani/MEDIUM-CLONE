import { initializeApp, getApps } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

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
    const user = result.user;
    return user;
  } catch (error) {
    console.error("Error during Google authentication:", error);
    throw error;
  }
};

import { create } from "zustand";

// Store untuk user firebase
interface UserState {
  user: {
    apiKey?: string;
    appName?: string;
    createdAt?: string;
    displayName?: string | null | undefined;
    email?: string | null | undefined;
    emailVerified?: boolean;
    isAnonymous?: boolean;
    lastLoginAt?: string;
    photoURL?: string | null | undefined;
    providerData?: object[];
    stsTokenManager?: object;
    uid?: string;
  };
  setUser: (user: UserState["user"]) => void;
}

// user firebase
export const useUser = create<UserState>((set) => ({
  user: {},
  setUser: (user) => set({ user }),
}));

// Type untuk custom user
interface UserCustomState {
  user: {
    email: string;
    id: number;
    name: string;
    profil_img: string;
    pronouns: string;
    short_bio: string;
  };
  setUserCustom: (user: UserCustomState["user"]) => void;
}

// user custom
export const useUserCustom = create<UserCustomState>((set) => ({
  user: {},
  setUserCustom: (user) => set({ user }),
}));

// Topic
interface TopicState {
  topic: string;
  setTopic: (topic: string) => void;
}

export const usesetTopic = create<TopicState>((set) => ({
  topic: "latest",
  setTopic: (topic) => set({ topic }),
}));

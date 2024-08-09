import { create } from "zustand";

// Store untuk user
interface UserState {
  user: {
    apiKey?: string;
    appName?: string;
    createdAt?: string;
    displayName?: string;
    email?: string;
    emailVerified?: boolean;
    isAnonymous?: boolean;
    lastLoginAt?: string;
    photoURL?: string;
    providerData?: object[];
    stsTokenManager?: object;
    uid?: string;
  };
  setUser: (user: UserState["user"]) => void;
}

export const useUser = create<UserState>((set) => ({
  user: {},
  setUser: (user) => set({ user }),
}));

// Store untuk topic
interface TopicState {
  topic: string;
  setTopic: (topic: string) => void;
}

export const usesetTopic = create<TopicState>((set) => ({
  topic: "latest",
  setTopic: (topic) => set({ topic }),
}));

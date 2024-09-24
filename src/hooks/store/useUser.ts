import { create } from "zustand";

// Store untuk user firebase
export interface UserState {
  user: {
    id: number | string | null | undefined;
    displayName?: string | null | undefined;
    pronouns: string | null | undefined;
    short_bio?: string | null | undefined;
    email?: string | null | undefined;
    photoURL?: string | null | undefined;
  };
  setUser: (user: UserState["user"]) => void;
}

// user firebase
export const useUser = create<UserState>((set) => ({
  user: {
    id: 0,
    displayName: "",
    pronouns: "",
    short_bio: "",
    email: "",
    photoURL: "",
  },
  setUser: (user) => set({ user }),
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

import { create } from "zustand";

// Store untuk user firebase
export interface UserState {
  user: any;
  setUser: (user: UserState["user"]) => void;
}

// user firebase
export const useUser = create<UserState>((set) => ({
  user: null,
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

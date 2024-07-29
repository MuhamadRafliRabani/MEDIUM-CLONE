import { create } from "zustand";

export const useUser = create((set) => ({
  user: {},
  setUser: (user: {}) => set({ user }),
}));

export const usesetTopic = create((set) => ({
  topic: "latest",
  setTopic: (topic: string) => set({ topic }),
}));

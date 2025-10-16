import { create } from "zustand/react";

interface MacbookStore {
  color: string;
  scale: number;
  texture: string;
  setColor: (color: string) => void;
  setScale: (scale: number) => void;
  reset: () => void;
}

const useMacbookStore = create<MacbookStore>((set) => ({
  color: "#2e2c2e",
  setColor: (color) => set({ color }),

  scale: 0.08,
  setScale: (scale) => set({ scale }),

  texture: "/videos/feature-1.mp4",
  setTexture: (texture: string) => set({ texture }),

  reset: () =>
    set({ color: "#2e2c2e", scale: 0.08, texture: "/videos/feature-1.mp4" }),
}));

export default useMacbookStore;

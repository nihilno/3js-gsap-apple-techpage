import { create } from "zustand";

const useMacBookStore = create<MacBookStore>((set) => ({
  color: "#A2AAAD",
  setColor: (color) => set({ color }),
  scale: 0.08,
  setScale: (scale) => set({ scale }),

  texture: "/videos/feature-1.mp4",
  setTexture: (texture) => set({ texture }),

  reset: () =>
    set({ color: "#A2AAAD", scale: 0.08, texture: "/videos/feature-1.mp4" }),
}));

export default useMacBookStore;

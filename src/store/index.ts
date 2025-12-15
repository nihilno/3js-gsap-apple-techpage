import { create } from "zustand";

type MacBookStore = {
  color: string;
  setColor: (color: string) => void;
  scale: number;
  setScale: (scale: number) => void;
  reset: () => void;
};

const useMacBookStore = create<MacBookStore>((set) => ({
  color: "#1D1D1F",
  setColor: (color) => set({ color }),
  scale: 0.08,
  setScale: (scale) => set({ scale }),
  reset: () => set({ color: "#1D1D1F", scale: 0.08 }),
}));

export default useMacBookStore;

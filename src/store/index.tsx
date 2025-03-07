import { create } from "zustand";

type StoreType = {
  currentColor: string;
  setCurrentColor: (v: string) => void;
  isScroll: boolean;
  setIsScroll: (v: boolean) => void;
};

export const usePanelAdminStore = create<StoreType>()((set) => ({
  currentColor: localStorage.getItem("currentColor") || "#7367f0",
  isScroll: false,
  setCurrentColor: (value: string) => {
    set(() => ({
      currentColor: value,
    }));
    document.documentElement.style.setProperty("--primary-color", value);
    localStorage.setItem("currentColor", value);
  },
  setIsScroll: (v: boolean) => {
    set({ isScroll: v });
  },
}));

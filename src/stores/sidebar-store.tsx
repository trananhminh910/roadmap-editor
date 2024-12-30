import { create } from "zustand";

interface SidebarState {
  isOpen: boolean;
  setIsOpen: () => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  isOpen: false,
  setIsOpen: () =>
    set((state) => ({
      isOpen: !state.isOpen,
    })),
}));

import { create } from 'zustand';

interface ImageSettingsState {
  settings: { [key: string]: number };
  setSetting: (id: string, value: number) => void;
}

const useImageSettingsStore = create<ImageSettingsState>((set) => ({
  settings: {
    warmth: 50,
    sepia: 0,
    invert: 0,
  },
  setSetting: (id, value) => set((state) => ({
    settings: {
      ...state.settings,
      [id]: value,
    },
  })),
}));

export default useImageSettingsStore;

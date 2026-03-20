import { create } from 'zustand'

export const useStore = create((set) => ({
  theme: 'default'
  setTheme: () => set((state) => ({
    theme: state.theme
  }))
}))

import { create } from 'zustand'

export const useStore = create((set) => ({
  user: null,
  theme: 'light',
  setUser: (user) => set({ user }),
  setTheme: (theme) => set({ theme }),
  logout: () => set({ user: null }),
}))

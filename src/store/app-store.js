import { create } from 'zustand'

export const useStore = create((set) => ({
    quests: [],
    setQuests: (newQuests) => set({ quests: newQuests }),
    activeGenre: 'all',
    setActiveGenre: (activeGenre) => set({ activeGenre: activeGenre }),
    data: '',
    setData: (newData) => set({ data: newData }),
}))


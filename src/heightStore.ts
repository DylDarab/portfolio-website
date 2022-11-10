import create from 'zustand'

type HeightStore = {
  height: number
  setHeight: (height: number) => void
}

export const useHeightStore = create<HeightStore>((set) => ({
  height: 0,
  setHeight: (height) => set({ height }),
}))

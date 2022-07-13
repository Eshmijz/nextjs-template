import React from "react";
import create from 'zustand'

type State = {
  count: number
  increment: () => void
}

const useStore = create<State>(set => ({
  count: 0,
  increment: () => set((state) => ({
    count: state.count + 1
  })),
}))

export const useCounter = useStore
import create from "zustand";
import { devtools } from "zustand/middleware";
import {
  sortingArray,
  compareTime,
  swapTime,
  sortingAlgorithms,
} from "./config";

interface ControlState {
  progress: string;
  speed: number;
  compareTime: number;
  swapTime: number;
  doneCount: number;
  startSorting: () => void;
  pauseSorting: () => void;
  resetSorting: () => void;
  markSortingDone: () => void;
  setSpeed: (speed: number) => void;
}
export const useControls = create<ControlState>()(
  devtools((set) => ({
    progress: "reset",
    speed: 3,
    compareTime: compareTime,
    swapTime: swapTime,
    doneCount: 0,

    startSorting: () => set({ progress: "start" }),
    pauseSorting: () => set({ progress: "pause" }),
    resetSorting: () => set({ progress: "reset", doneCount: 0 }),
    markSortingDone: () =>
      set((state) => {
        if (useData.getState().algorithm === sortingAlgorithms.length) {
          if (state.doneCount === sortingAlgorithms.length - 1)
            return { doneCount: 0, progress: "done" };
          else return { doneCount: state.doneCount + 1 };
        } else return { progress: "done" };
      }),
    setSpeed: (speed) =>
      set(() => {
        return { swapTime: 3000 / speed, compareTime: 1500 / speed, speed };
      }),
  }))
);

interface useDataState {
    algorithm: number;
    sortingArray: number [];
    setSortingArray: (array: [])=>void;
    setAlgorithm: (idx: number) => void;
}

export const useData = create<useDataState>()(
  devtools((set) => ({
    algorithm: 0,
    sortingArray: sortingArray,

    setSortingArray: (array) => set({ sortingArray: array }),
    setAlgorithm: (idx) => set({ algorithm: idx }),
  }))
);

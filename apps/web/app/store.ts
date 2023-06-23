import { create, type StateCreator } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { createAuthSlice, type AuthSlice } from "./auth/slice";

export type AppState = AuthSlice;

export type AppSliceCreator<T> = StateCreator<
  AppState,
  [["zustand/devtools", never], ["zustand/immer", never]],
  [],
  T
>;

export const useAppStore = create<AppState>()(
  immer(
    devtools((...a) => ({
      ...createAuthSlice(...a),
    }))
  )
);

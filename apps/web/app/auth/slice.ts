import type { AppSliceCreator } from "../store";
import { UserRole } from "./types";

export interface AuthSlice {
  auth: {
    accessToken: string | null;
    profile: {
      name: string;
      email: string;
      image: string | null;
      role: UserRole;
    } | null;
  };
  setAuth: (auth: AuthSlice["auth"]) => void;
}

export const createAuthSlice: AppSliceCreator<AuthSlice> = (set) => ({
  auth: {
    accessToken: null,
    profile: null,
  },
  setAuth: (auth) => {
    set((state) => {
      state.auth = auth;
    });
  },
});

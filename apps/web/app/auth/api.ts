import fetchApi from "../lib/fetchApi";
import { Signin, Signup } from "./types";

export const signup = async (credentials: Signup) => {
  const res = await fetchApi("/auth/sign-up", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  return await res.json();
};

export const signin = async (credentials: Signin) => {
  const res = await fetchApi("/auth/sign-in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  return await res.json();
};

import fetchApi from "../lib/fetchApi";
import { Gold } from "./types";

export const getGolds = async () => {
  const res = await fetchApi("/golds", { cache: "no-store" });
  const golds: Gold[] = await res.json();

  return golds;
};

import { atom } from "recoil";

export const moviesListState = atom({
  key: "moviesList",
  default: [] as any
});

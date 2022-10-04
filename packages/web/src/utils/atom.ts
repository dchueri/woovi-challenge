import { atom } from "recoil";
import { Alert } from "./alerts";

export const alertState = atom({
  key: "alertState",
  default: {} as Alert,
});

export const darkState = atom({
  key: "darkState",
  default: "dark",
});

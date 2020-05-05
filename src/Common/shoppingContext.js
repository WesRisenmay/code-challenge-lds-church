import { createContext } from "react";

export const convertFormikObjectToArray = (object) =>
  Object.entries(object)
    .map(([key, value]) => ({
      name: key,
      amount: value,
    }))
    .filter((item) => item.amount > 0);
export default createContext("shopping");

import { ModelNames } from "./model";
import * as goml from "../../wailsjs/go/main/App";
export const callModel = async (name: ModelNames) => {
  if (name === ModelNames.BC) {
    return await goml.BinaryCrossentropy();
  } else {
    return await goml.Regression();
  }
};

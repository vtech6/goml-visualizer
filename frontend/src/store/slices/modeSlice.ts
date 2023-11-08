import { createSlice } from "@reduxjs/toolkit";
import { PlotMode } from "../../network/model";

const initialState = PlotMode.TEST;

const modeSlice = createSlice({
  initialState,
  reducers: {
    toggleMode(state, { payload }: { payload: PlotMode }) {
      state = payload;
      return state;
    },
  },
  name: "plotMode",
});

export const { toggleMode } = modeSlice.actions;
export default modeSlice;

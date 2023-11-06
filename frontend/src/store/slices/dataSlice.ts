import { createSlice } from "@reduxjs/toolkit";

type NetworkData = {
  data: {
    TrainX: number[][];
    TestX: number[][];
    TrainY: number[][];
    TestY: number[][];
    PredictionsTrain: number[];
    PredictionsTest: number[];
    Accuracy: number;
  } | null;
};

const initialState: NetworkData = { data: null };
const dataReducer = createSlice({
  initialState,
  reducers: {
    update(state, { payload }) {
      state.data = payload;
    },
  },
  name: "networkData",
});
export type { NetworkData };
export const { update } = dataReducer.actions;
export default dataReducer;

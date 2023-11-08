import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dataSlice from "../store/slices/dataSlice";
import modeSlice from "./slices/modeSlice";
const reducers = {
  [dataSlice.name]: dataSlice.reducer,
  [modeSlice.name]: modeSlice.reducer,
};

const store = configureStore({
  reducer: combineReducers(reducers),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dataReducer from "../store/slices/dataSlice";
const reducers = {
  [dataReducer.name]: dataReducer.reducer,
};

const store = configureStore({
  reducer: combineReducers(reducers),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;

import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { PlotMode } from "../../network/model";
import { toggleMode } from "../slices/modeSlice";

const useTogglePlotMode = () => {
  const dispatch = useDispatch();
  return useCallback(
    (plotMode: PlotMode) => dispatch(toggleMode(plotMode)),
    [dispatch]
  );
};

export default useTogglePlotMode;

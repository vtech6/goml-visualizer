import { useMemo } from "react";
import { PlotMode } from "./model";
import useTogglePlotMode from "../store/dispatch/useTogglePlotMode";
import styles from "../plot/plot.module.css";
import usePlotMode from "../store/selectors/useVisualMode";
const PlotModeButtons = () => {
  const togglePlotMode = useTogglePlotMode();
  const plotMode = usePlotMode();
  const Buttons = useMemo(
    () => (
      <>
        {[PlotMode.TRAIN, PlotMode.TEST].map((mode, index) => (
          <>
            <div
              className={
                mode === plotMode ? styles.selected : styles.notSelected
              }
              onClick={() => togglePlotMode(mode)}
            >
              {mode === PlotMode.TRAIN ? "Train Mode" : "Test Mode"}
            </div>
            {index === 0 && <div style={{ width: "16px" }} />}
          </>
        ))}
      </>
    ),
    [plotMode, togglePlotMode]
  );
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>{Buttons}</div>
      <div style={{ height: "16px" }} />
    </>
  );
};

export default PlotModeButtons;

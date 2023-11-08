import { PlotMode } from "../network/model";
import usePlotMode from "../store/selectors/useVisualMode";
import styles from "./tooltip.module.css";
import { TooltipProps } from "./types";

// Information needed to build the tooltip

export const Tooltip = ({ interactionData }: TooltipProps) => {
  const plotMode = usePlotMode();

  if (!interactionData) {
    return null;
  }

  return (
    <div
      className={
        plotMode === PlotMode.TRAIN ? styles.tooltip : styles.tooltipTest
      }
      style={{
        left: interactionData.xPos,
        top: interactionData.yPos,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "4px",
      }}
    >
      <div className={styles.tooltipText}>
        {plotMode === PlotMode.TRAIN
          ? interactionData.target
          : `Target: ${interactionData.target}`}
      </div>
      {plotMode === PlotMode.TEST && (
        <div
          className={styles.tooltipText}
        >{`Prediction: ${interactionData.predicted}`}</div>
      )}
    </div>
  );
};

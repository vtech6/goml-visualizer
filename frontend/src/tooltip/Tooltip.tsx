import styles from "./tooltip.module.css";
import { TooltipProps } from "./types";

// Information needed to build the tooltip

export const Tooltip = ({ interactionData }: TooltipProps) => {
  if (!interactionData) {
    return null;
  }

  return (
    <div
      className={styles.tooltip}
      style={{
        left: interactionData.xPos,
        top: interactionData.yPos,
      }}
    >
      {interactionData.name}
    </div>
  );
};

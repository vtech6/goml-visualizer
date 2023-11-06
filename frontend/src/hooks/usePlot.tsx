import { Dispatch, useCallback, useMemo } from "react";
import { Tooltip } from "../tooltip/Tooltip";
import { measureLabels, margins } from "../plot/constants";
import { InteractionData } from "../tooltip/types";
import style from "../plot/plot.module.css";
const usePlot = ({
  axesRef,
  boundsHeight,
  boundsWidth,
  hovered,
  selectVariable,
  shapes,
  height,
  width,
  xAxisMeasure,
  yAxisMeasure,
}: {
  selectVariable: (x: string, value: number) => void;
  axesRef: React.MutableRefObject<null>;
  boundsHeight: number;
  boundsWidth: number;
  height: number;
  hovered: InteractionData | null;
  setHovered: Dispatch<InteractionData | null>;
  shapes: JSX.Element[];
  width: number;
  xAxisMeasure: number;
  yAxisMeasure: number;
}) => {
  const axisOptions = useCallback(
    (axis: string) => {
      const currentAxis = axis === "y" ? yAxisMeasure : xAxisMeasure;
      return (
        <div>
          <div style={{ fontSize: "22px", fontWeight: "700" }}>
            {axis.toUpperCase()} Axis
          </div>
          {measureLabels.map((item, index) => (
            <div
              className={
                currentAxis === index ? style.selected : style.notSelected
              }
              onClick={() => selectVariable(axis, index)}
            >
              {item}
            </div>
          ))}
        </div>
      );
    },
    [selectVariable, yAxisMeasure, xAxisMeasure]
  );
  const xAxisOptions = axisOptions("x");
  const yAxisOptions = axisOptions("y");
  const content = useMemo(() => {
    return (
      <div
        style={{ display: "flex", flexDirection: "row", position: "relative" }}
      >
        <div style={{ height: "100%", alignSelf: "center" }}>
          {yAxisOptions}
          <div style={{ height: "16px" }} />
          {xAxisOptions}
        </div>
        <svg width={width} height={height}>
          <g
            width={boundsWidth}
            height={boundsHeight}
            transform={`translate(${[margins.left, margins.top].join(",")})`}
          >
            {shapes}
          </g>
          <g
            width={boundsWidth}
            height={boundsHeight}
            ref={axesRef}
            transform={`translate(${[margins.left, margins.top].join(",")})`}
          />
        </svg>

        <div
          style={{
            width: boundsWidth,
            height: boundsHeight,
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
            marginLeft: margins.left,
            marginTop: margins.top,
          }}
        >
          <Tooltip interactionData={hovered} />
        </div>
      </div>
    );
  }, [
    xAxisOptions,
    yAxisOptions,
    width,
    height,
    boundsWidth,
    boundsHeight,
    shapes,
    axesRef,
    hovered,
  ]);

  return content;
};

export default usePlot;

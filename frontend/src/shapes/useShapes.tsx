import { Dispatch, useMemo } from "react";
import useColorScale from "../hooks/useColorScales";
import { labels } from "../plot/constants";
import style from "./shapes.module.css";
import * as irisData from "../IrisOutput.json";
import { InteractionData } from "../tooltip/types";
const useShapes = ({
  xScale,
  yScale,
  yAxisMeasure,
  xAxisMeasure,
  data,
  hovered,
  setHovered,
}: {
  boundsHeight: number;
  boundsWidth: number;
  xAxisMeasure: number;
  yAxisMeasure: number;
  data: number[][];
  hovered: InteractionData | null;
  setHovered: Dispatch<InteractionData | null>;
  xScale: d3.ScaleLinear<number, number, never>;
  yScale: d3.ScaleLinear<number, number, never>;
}) => {
  const colorScale = useColorScale({ xAxisMeasure, data });
  return useMemo(
    () =>
      data
        .sort((a, b) => b[0] - a[0])
        .map((d, i) => {
          const currentClass = labels[irisData.TrainY[i][0]];
          const className =
            hovered?.name && currentClass !== hovered.name
              ? style.scatterplotCircle + " " + style.dimmed
              : style.scatterplotCircle;
          return (
            <circle
              key={i}
              r={7}
              cx={xScale(d[xAxisMeasure])}
              cy={yScale(d[yAxisMeasure])}
              className={className}
              opacity={1}
              stroke={colorScale(currentClass)}
              fill={colorScale(currentClass)}
              onMouseEnter={() =>
                setHovered({
                  xPos: xScale(d[xAxisMeasure]),
                  yPos: yScale(d[yAxisMeasure]),
                  name: currentClass,
                })
              }
              onMouseLeave={() => setHovered(null)}
            />
          );
        }),
    [
      data,
      hovered?.name,
      xScale,
      xAxisMeasure,
      yScale,
      yAxisMeasure,
      colorScale,
      setHovered,
    ]
  );
};
export default useShapes;

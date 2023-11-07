import { Dispatch, useMemo } from "react";
import useColorScale from "../hooks/useColorScales";
import { labels } from "../plot/constants";
import style from "./shapes.module.css";
import { InteractionData } from "../tooltip/types";
import useDataSelector from "../store/selectors/useDataSelector";
const useShapes = ({
  xScale,
  yScale,
  yAxisMeasure,
  xAxisMeasure,
  hovered,
  setHovered,
}: {
  boundsHeight: number;
  boundsWidth: number;
  xAxisMeasure: number;
  yAxisMeasure: number;
  hovered: InteractionData | null;
  setHovered: Dispatch<InteractionData | null>;
  xScale: d3.ScaleLinear<number, number, never>;
  yScale: d3.ScaleLinear<number, number, never>;
}) => {
  const networkOutput = useDataSelector();

  const { trainX, trainY, predictedY } = useMemo(
    () => ({
      trainX: networkOutput!.TrainX,
      trainY: networkOutput!.TrainY,
      predictedY: networkOutput!.PredictionsTrain,
    }),
    [networkOutput]
  );
  const colorScale = useColorScale({ xAxisMeasure, data: trainX });
  const labelIndexModifier = new Set(trainY.map((item) => item[0]));
  return useMemo(
    () =>
      trainX.map((d, i) => {
        const currentLabels =
          labelIndexModifier.size === 2 ? ["Setosa", "Not Setosa"] : labels;
        const currentClass =
          currentLabels[trainY[i][0] + (labelIndexModifier.size - 2)];
        const predictedClass =
          currentLabels[predictedY[[i][0] + (labelIndexModifier.size - 2)]];
        const className =
          hovered?.target && currentClass !== hovered.target
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
                target: currentClass,
                predicted: predictedClass,
              })
            }
            onMouseLeave={() => setHovered(null)}
          />
        );
      }),
    [
      trainX,
      labelIndexModifier.size,
      trainY,
      predictedY,
      hovered?.target,
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

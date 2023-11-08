import { Dispatch, useMemo } from "react";
import useColorScale from "../hooks/useColorScales";
import { labels } from "../plot/constants";
import style from "./shapes.module.css";
import { InteractionData } from "../tooltip/types";
import useDataSelector from "../store/selectors/useDataSelector";
import usePlotMode from "../store/selectors/useVisualMode";
import { PlotMode } from "../network/model";
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
  const plotMode = usePlotMode();
  const networkOutput = useDataSelector();

  const { trainX, trainY, testX, testY, predictedTestY, predictedTrainY } =
    useMemo(
      () => ({
        trainX: networkOutput!.TrainX,
        trainY: networkOutput!.TrainY,
        predictedTrainY: networkOutput!.PredictionsTrain,
        testX: networkOutput!.TestX,
        testY: networkOutput!.TestY,
        predictedTestY: networkOutput!.PredictionsTest,
      }),
      [networkOutput]
    );

  const colorScale = useColorScale();
  const labelIndexModifier = new Set(trainY.map((item) => item[0]));
  return useMemo(() => {
    const x = plotMode === PlotMode.TRAIN ? trainX : testX;
    const y = plotMode === PlotMode.TRAIN ? trainY : testY;
    const prediction =
      plotMode === PlotMode.TRAIN ? predictedTrainY : predictedTestY;
    return x.map((d, i) => {
      const currentLabels =
        labelIndexModifier.size === 2 ? ["Setosa", "Not Setosa"] : labels;
      const currentClass =
        currentLabels[y[i][0] + (labelIndexModifier.size - 2)];
      const predictedClass =
        currentLabels[prediction[i] + (labelIndexModifier.size - 2)];
      const className =
        hovered?.target &&
        currentClass !== hovered.target &&
        plotMode === PlotMode.TRAIN
          ? style.scatterplotCircle + " " + style.dimmed
          : style.scatterplotCircle;

      const testColor = currentClass === predictedClass ? "#54B435" : "#E0144C";
      return (
        <circle
          key={i}
          r={7}
          cx={xScale(d[xAxisMeasure])}
          cy={yScale(d[yAxisMeasure])}
          className={className}
          opacity={1}
          stroke={
            plotMode === PlotMode.TEST && hovered?.target
              ? testColor
              : colorScale(currentClass)
          }
          fill={
            plotMode === PlotMode.TEST && hovered?.target
              ? testColor
              : colorScale(currentClass)
          }
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
    });
  }, [
    plotMode,
    trainX,
    testX,
    trainY,
    testY,
    predictedTrainY,
    predictedTestY,
    labelIndexModifier.size,
    hovered?.target,
    xScale,
    xAxisMeasure,
    yScale,
    yAxisMeasure,
    colorScale,
    setHovered,
  ]);
};
export default useShapes;

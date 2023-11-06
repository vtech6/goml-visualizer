import { useState } from "react";

import * as irisData from "../IrisOutput.json";

import useAxes from "../hooks/useAxes";
import useScales from "../hooks/useScales";
import useSelectVariable from "../hooks/useSelectVariable";

import useShapes from "../shapes/useShapes";
import usePlot from "../hooks/usePlot";
import { InteractionData } from "../tooltip/types";
import { margins } from "./constants";
import { PlotProps } from "./types";

export const Plot = ({
  width,
  height,
  data = irisData.TrainX.map((item) => item.map((item2) => item2)),
}: PlotProps) => {
  // Layout. The div size is set by the given props.
  // The bounds (=area inside the axis) is calculated by substracting the marginss

  const boundsWidth = width - (margins.right + margins.left);
  const boundsHeight = height - (margins.top + margins.bottom);

  const [xAxisMeasure, setXAxisMeasure] = useState<number>(1);
  const [yAxisMeasure, setYAxisMeasure] = useState<number>(0);
  const [hovered, setHovered] = useState<InteractionData | null>(null);

  // Scales

  const selectVariable = useSelectVariable({
    xAxisMeasure,
    setXAxisMeasure,
    setYAxisMeasure,
    yAxisMeasure,
  });
  const { xScale, yScale } = useScales({
    boundsHeight,
    boundsWidth,
    yAxisMeasure,
    xAxisMeasure,
    data,
  });
  // Render the X and Y axis using d3.js, not react
  const axesRef = useAxes({
    boundsHeight,
    boundsWidth,
    xAxisMeasure,
    xScale,
    yAxisMeasure,
    yScale,
  });

  const shapes = useShapes({
    setHovered,
    hovered,
    boundsHeight,
    boundsWidth,
    xAxisMeasure,
    yAxisMeasure,
    data,
    xScale,
    yScale,
  });
  // Build the shapes
  const content = usePlot({
    axesRef,
    boundsHeight,
    boundsWidth,
    height,
    hovered,
    setHovered,
    shapes,
    width,
    selectVariable,
    xAxisMeasure,
    yAxisMeasure,
  });

  return content;
};

export default Plot;

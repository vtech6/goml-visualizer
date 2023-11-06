import { useMemo } from "react";
import * as d3 from "d3";

const useScales = ({
  boundsHeight,
  boundsWidth,
  data,
  xAxisMeasure,
  yAxisMeasure,
}: {
  boundsHeight: number;
  boundsWidth: number;
  data: number[][];
  xAxisMeasure: number;
  yAxisMeasure: number;
}) => {
  const yScale = useMemo(() => {
    const [min, max] = d3.extent(data.map((d) => d[xAxisMeasure])) as [
      number,
      number
    ];
    return d3.scaleLinear().domain([min, max]).range([boundsHeight, 0]).nice();
  }, [boundsHeight, data, xAxisMeasure]);

  const xScale = useMemo(() => {
    const [min, max] = d3.extent(data.map((d) => d[yAxisMeasure])) as [
      number,
      number
    ];
    return d3.scaleLinear().domain([min, max]).range([0, boundsWidth]).nice();
  }, [boundsWidth, data, yAxisMeasure]);

  return {
    xScale,
    yScale,
  };
};
export default useScales;

import { useMemo } from "react";
import * as d3 from "d3";
import useDataSelector from "../store/selectors/useDataSelector";

const useScales = ({
  boundsHeight,
  boundsWidth,

  xAxisMeasure,
  yAxisMeasure,
}: {
  boundsHeight: number;
  boundsWidth: number;
  xAxisMeasure: number;
  yAxisMeasure: number;
}) => {
  const networkOutput = useDataSelector();
  const x = useMemo(() => networkOutput!.TrainX, [networkOutput]);
  const yScale = useMemo(() => {
    const [min, max] = d3.extent(x.map((d) => d[xAxisMeasure])) as [
      number,
      number
    ];
    return d3.scaleLinear().domain([min, max]).range([boundsHeight, 0]).nice();
  }, [boundsHeight, x, xAxisMeasure]);

  const xScale = useMemo(() => {
    const [min, max] = d3.extent(x.map((d) => d[yAxisMeasure])) as [
      number,
      number
    ];
    return d3.scaleLinear().domain([min, max]).range([0, boundsWidth]).nice();
  }, [boundsWidth, x, yAxisMeasure]);

  return {
    xScale,
    yScale,
  };
};
export default useScales;

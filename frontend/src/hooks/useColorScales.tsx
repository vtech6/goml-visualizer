import * as d3 from "d3";
import { useMemo } from "react";

const useColorScale = ({
  xAxisMeasure,
  data,
}: {
  xAxisMeasure: number;
  data: number[][];
}) => {
  const groups = useMemo(
    () =>
      data
        .map((d) => String(d[xAxisMeasure] < 0.5))
        .filter((x, i, a) => a.indexOf(x) == i),
    [data, xAxisMeasure]
  );

  const colorScale = useMemo(
    () =>
      d3
        .scaleOrdinal<string>()
        .domain(groups)
        .range(["#940B92", "#DA0C81", "#F99417"]),
    [groups]
  );
  return colorScale;
};
export default useColorScale;

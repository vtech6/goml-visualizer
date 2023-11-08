import * as d3 from "d3";
import { useMemo } from "react";

const useColorScale = () => {
  const colorScale = useMemo(
    () => d3.scaleOrdinal<string>().range(["#940B92", "#DA0C81", "#F99417"]),
    []
  );
  return colorScale;
};
export default useColorScale;

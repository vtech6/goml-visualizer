import { useCallback } from "react";

const useSelectVariable = ({
  xAxisMeasure,
  yAxisMeasure,
  setXAxisMeasure,
  setYAxisMeasure,
}: {
  xAxisMeasure: number;
  yAxisMeasure: number;
  setXAxisMeasure: React.Dispatch<number>;
  setYAxisMeasure: React.Dispatch<number>;
}) => {
  return useCallback(
    (axis: string, value: number) => {
      if (xAxisMeasure === value && axis === "y") {
        setXAxisMeasure(yAxisMeasure);
        setYAxisMeasure(value);
      } else if (yAxisMeasure === value && axis === "x") {
        setYAxisMeasure(xAxisMeasure);
        setXAxisMeasure(value);
      } else {
        if (axis === "y") {
          setYAxisMeasure(value);
        } else {
          setXAxisMeasure(value);
        }
      }
    },
    [setXAxisMeasure, setYAxisMeasure, xAxisMeasure, yAxisMeasure]
  );
};

export default useSelectVariable;

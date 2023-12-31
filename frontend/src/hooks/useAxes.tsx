import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { measureLabels } from "../plot/constants";
const useAxes = ({
  xScale,
  yScale,
  boundsHeight,
  boundsWidth,
  yAxisMeasure,
  xAxisMeasure,
}: {
  xScale: d3.ScaleLinear<number, number, never>;
  yScale: d3.ScaleLinear<number, number, never>;
  boundsHeight: number;
  boundsWidth: number;
  yAxisMeasure: number;
  xAxisMeasure: number;
}) => {
  const axesRef = useRef(null);
  // eslint-disable-next-line no-var
  var fillColor = "white";
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
  if (!darkThemeMq.matches) {
    fillColor = "black";
  }
  useEffect(() => {
    const svgElement = d3.select(axesRef.current);
    svgElement.selectAll("*").remove();

    const xAxisGenerator = d3.axisBottom(xScale);
    svgElement
      .append("g")
      .attr("transform", "translate(0," + (boundsHeight + 20) + ")")
      .call(xAxisGenerator);
    svgElement
      .append("text")
      .attr("font-size", 12)
      .attr("text-anchor", "end")
      .attr("x", boundsWidth)
      .attr("y", boundsHeight + 60)
      .text(measureLabels[xAxisMeasure])
      .style("fill", fillColor);

    const yAxisGenerator = d3.axisLeft(yScale);
    svgElement
      .append("g")
      .attr("transform", "translate(" + -20 + ",0)")
      .call(yAxisGenerator);
    svgElement
      .append("text")
      .attr("font-size", 12)
      .attr("text-anchor", "end")
      .attr("x", 0)
      .attr("y", -60)
      .text(measureLabels[yAxisMeasure])
      .attr("transform", "rotate(-90)")
      .style("fill", fillColor);
  }, [
    xScale,
    yScale,
    boundsHeight,
    boundsWidth,
    yAxisMeasure,
    xAxisMeasure,
    fillColor,
  ]);

  return axesRef;
};

export default useAxes;

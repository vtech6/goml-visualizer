type AxesProps = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export const Axes = ({ x, y, width, height }: AxesProps) => {
  return (
    <g>
      {/* vertical and horizontal lines */}
      <line
        x1={0}
        x2={width}
        y1={y}
        y2={y}
        stroke="#ababab"
        strokeDasharray="2"
      />
      <line
        x1={x}
        x2={x}
        y1={0}
        y2={height}
        stroke="#ababab"
        strokeDasharray="2"
      />

      {/* labels for X axis */}
      <text
        x={0}
        y={-60}
        fill="#ababab"
        fontSize={16}
        textRendering={"optimizeLegibility"}
        dominantBaseline={"Auto"}
      >
        Petal Width
      </text>

      <text
        x={250}
        y={150}
        fill="#ababab"
        fontSize={16}
        textAnchor="end"
        textRendering={"optimizeLegibility"}
        dominantBaseline={"Hanging"}
        transform="rotate(-90)"
      >
        {"Sepal Width"}
      </text>
    </g>
  );
};

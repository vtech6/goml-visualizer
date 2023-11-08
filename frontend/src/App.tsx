import "./App.css";
import NetworkButtons from "./network/NetworkButtons";
import PlotModeButtons from "./network/PlotModeButtons";

import LinePlot from "./plot/Plot";
import useDataSelector from "./store/selectors/useDataSelector";

function App() {
  const data = useDataSelector();
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {data !== null && <LinePlot width={700} height={500} />}
      {data !== null && <PlotModeButtons />}
      <NetworkButtons />
    </div>
  );
}

export default App;

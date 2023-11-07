import "./App.css";
import NetworkButtons from "./network/NetworkButtons";

import LinePlot from "./plot/Plot";
import useDataSelector from "./store/selectors/useDataSelector";

function App() {
  const data = useDataSelector();
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {data !== null && <LinePlot width={700} height={500} />}
      <NetworkButtons />
    </div>
  );
}

export default App;

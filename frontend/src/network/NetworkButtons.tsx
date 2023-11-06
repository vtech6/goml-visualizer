import useDataSelector from "../store/selectors/useDataSelector";
import * as goml from "../../wailsjs/go/main/App";

import useUpdateData from "../store/dispatch/useUpdateData";
import { NetworkData } from "../store/slices/dataSlice";
import { useState } from "react";
const NetworkButtons = () => {
  const [runn, setRunn] = useState(false);
  const data = useDataSelector();
  const update = useUpdateData();
  const runN = async () => {
    setRunn(true);
    const data = await goml.RunNetwork();
    update(JSON.parse(data.file) as NetworkData);
    setRunn(false);
  };

  return (
    <div>
      <div
        style={{ height: 100, width: 100, backgroundColor: "red" }}
        onClick={runN}
      >
        {`${data}`}
      </div>
      <div
        style={{
          height: 100,
          width: 100,
          backgroundColor: data === null ? "blue" : "yellow",
        }}
      >
        {`${data} ${runn}`}
      </div>
    </div>
  );
};
export default NetworkButtons;

import useUpdateData from "../store/dispatch/useUpdateData";
import { NetworkData } from "../store/slices/dataSlice";
import { useCallback, useRef, useState } from "react";
import { ModelNames } from "./model";
import { callModel } from "./utils";
import styles from "./buttons.module.css";
const NetworkButtons = () => {
  const [processing, setProcessing] = useState<ModelNames | null>(null);
  const update = useUpdateData();

  const runModel = useCallback(
    async (name: ModelNames) => {
      if (processing !== null) {
        return;
      }
      setProcessing(name);
      const { savedData: data } = await callModel(name);
      const networkData: NetworkData = data;
      update(networkData);
      setProcessing(null);
    },
    [processing, update]
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {[ModelNames.BC, ModelNames.REG].map((modelName) => (
        <>
          <div
            className={styles.textButton}
            onClick={() => runModel(modelName)}
          >
            {!(processing === modelName) ? modelName : "Running"}
          </div>
          <div style={{ width: "16px" }} />
        </>
      ))}
      <div
        className={styles.textButton}
        onClick={() => fileInputRef.current?.click()}
      >
        {"Select File To Upload"}
      </div>
      <input
        type={"file"}
        onChange={(event) => {
          const file = new FileReader();
          if (event.target.files?.[0] != undefined) {
            file.readAsText(event.target.files?.[0], "UTF-8");
            file.onload = (e) => {
              const result = JSON.parse(e.target?.result as string);
              const networkData: NetworkData = result;
              update(networkData);
            };
          }
        }}
        ref={fileInputRef}
        style={{
          display: "none",
        }}
      />
    </div>
  );
};
export default NetworkButtons;

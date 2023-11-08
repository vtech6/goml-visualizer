import { useSelector } from "react-redux";
import { RootState } from "../store";

const useDataSelector = () =>
  useSelector((state: RootState) => state.networkData.data);

export default useDataSelector;

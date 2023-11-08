import { useSelector } from "react-redux";
import { RootState } from "../store";

const usePlotMode = () => useSelector((state: RootState) => state.plotMode);
export default usePlotMode;

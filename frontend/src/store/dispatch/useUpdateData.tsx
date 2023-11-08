import { useDispatch } from "react-redux";
import { NetworkData, update } from "../slices/dataSlice";
import { useCallback } from "react";

const useUpdateData = () => {
  const dispatch = useDispatch();
  return useCallback(
    (value: NetworkData | null) => dispatch(update(value)),
    [dispatch]
  );
};

export default useUpdateData;

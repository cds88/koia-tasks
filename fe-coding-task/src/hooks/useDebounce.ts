import { useRef } from "react";

const DEBOUNCE_TIMEOUT = 1_300;

export type UseDebounceCallbackType<T> = (
  values: T,
  storeInHistory: boolean
) => void;

export const useDebounce = <T>(
  entryValues: T,
  callback: UseDebounceCallbackType<T>
) => {
  const debouncedValueRef = useRef<T>(entryValues);
  const debouncedRef = useRef<number | undefined>(undefined);

  const debounce = (value: T, storeInHistory = false) => {
    debouncedValueRef.current = value;
    if (debouncedRef.current !== undefined) {
      clearTimeout(debouncedRef.current);
    }
    debouncedRef.current = setTimeout(() => {
      callback(debouncedValueRef.current, storeInHistory);
    }, DEBOUNCE_TIMEOUT);
  };

  return {
    debounce,
  };
};

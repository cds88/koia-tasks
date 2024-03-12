import { useEffect, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { useRecoilState } from "recoil";
import { makeRequest } from "../api/makeRequest";
import { convertParamsToQuery } from "../helpers/convertParamsToQuery";
import { retrieveParamsFromUrl } from "../helpers/retrieveParamsFromUrl";
import { statisticsState } from "../store/atom";
import { FormType, LocalStorageKeys } from "../types";
import { UseDebounceCallbackType, useDebounce } from "./useDebounce";
import { useLocalStorage } from "./useLocalStorage";
import usePrevious from "./usePrev";

export const useApi = (
  formMethods: UseFormReturn<FormType, Record<string, string>, FormType>
) => {
  const [, setStatisticsState] = useRecoilState(statisticsState);
  const [isFirstCall, setIsFirstCall] = useState<boolean>(true);
  const [searchHistory, setSearchHistory] = useLocalStorage<FormType[]>(
    LocalStorageKeys.SEARCH_HISTORY,
    []
  );
  const { watch } = formMethods;

  const watchedValues = watch();

  const previousWatchedValues = usePrevious(watchedValues);

  const { contents, houseType, quartersRange } = watchedValues;

  const debounceCallback: UseDebounceCallbackType<FormType> = (
    debouncedValues,
    storeInHistory
  ) => {
    const urlString = convertParamsToQuery(debouncedValues);
    window.history.replaceState(null, "", urlString);
    makeRequest(debouncedValues).then((results) => {
      setStatisticsState(results);
      if (!results) return;
      setIsFirstCall(false);
      if (!storeInHistory) return;

      confirm("Would you like to store the search inside search history")
        ? setSearchHistory([...searchHistory, debouncedValues])
        : null;
    });
  };

  const { debounce } = useDebounce<FormType>(watchedValues, debounceCallback);

  useEffect(() => {
    const paramsMap = retrieveParamsFromUrl();
    Object.entries(paramsMap).forEach(([key, val]) => {
      if (!val) return;
      formMethods.setValue(
        key as keyof FormType,
        val.filter((e) => e)
      );
    });

    makeRequest(paramsMap).then((results) => setStatisticsState(results));
  }, []);

  useEffect(() => {
    const shouldStoreSearchInHistory =
      !isFirstCall &&
      JSON.stringify(previousWatchedValues) !== JSON.stringify(watchedValues);
    debounce(watchedValues, shouldStoreSearchInHistory);
  }, [contents, houseType, quartersRange]);
};

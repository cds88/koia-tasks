export type FormType = {
  quartersRange: string[];
  houseType: string[];
  contents: string[];
};

export type FormTypeNames = keyof FormType;

export type FormTypeNamesMap = Record<FormTypeNames, FormTypeNames>;

export enum FormTypeNamesEnum {
  QUARTERS_RANGE = "quartersRange",
  HOUSE_TYPE = "houseType",
}

export type UseStateContextType<T> = [
  T,
  React.Dispatch<React.SetStateAction<T>>
];

type GraphDataItems = Record<string, string>;

export type GraphDataContextType = UseStateContextType<GraphDataItems>;

export type StatisticsApiResults = {
  value: number[];
  dimension: {
    Tid: {
      category: {
        index: Record<string, number>
      }
    }
  }
}

export enum LocalStorageKeys {
  SEARCH_HISTORY= 'searchHistory'
}
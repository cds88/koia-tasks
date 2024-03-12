import { atom } from "recoil";
import { StatisticsApiResults } from "../types";

const defaultStatisticsState: StatisticsApiResults = {
  value: [],
  dimension: {
    Tid: {
      category: {
        index: {},
      },
    },
  },
};

export const statisticsState = atom<StatisticsApiResults>({
  key: "statisticsState",
  default: defaultStatisticsState,
});

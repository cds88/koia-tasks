import { FormType } from "../types";

export const getPostRequestData = (paramsMap: FormType)=> {
    return {
      query: [
        {
          code: "Boligtype",
          selection: {
            filter: "item",
            values:  paramsMap.houseType
          },
        },
        {
          code: "ContentsCode",
          selection: {
            filter: "item",
            values: paramsMap.contents
          },
        },
        {
          code: "Tid",
          selection: {
            filter: "item",
            values: paramsMap.quartersRange,
          },
        },
      ],
      response: {
        format: "json-stat2",
      },
    }
  };
  
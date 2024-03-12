import { FormType } from "../types";

export const retrieveParamsFromUrl = () => {
  const params = new URLSearchParams(window.location.search);

  const paramsMap: FormType = {
    houseType: params.get("houseType")?.split(",") || [],
    quartersRange: params.get("quartersRange")?.split(",") || [],
    contents: params.get("contents")?.split(",") || [],
  };

  return paramsMap;
};

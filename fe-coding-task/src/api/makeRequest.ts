import axios from "axios";
import { FormType } from "../types";
import { getPostRequestData } from "./utils";

export const makeRequest = async (paramsMap: FormType) => {
    try {
      const postRequestData = getPostRequestData(paramsMap)
   
      const {data} = await axios.post(
        "https://data.ssb.no/api/v0/no/table/07241",
        postRequestData
      );
 
      return data
    
    } catch (error) {
      console.error(error)
    }
  };
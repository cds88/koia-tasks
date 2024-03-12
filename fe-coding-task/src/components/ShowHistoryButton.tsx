import { Button } from "@mui/material";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { LocalStorageKeys } from "../types";

const ShowHistoryButton = () => {
  const [searchHistoryLocalStorage] = useLocalStorage(
    LocalStorageKeys.SEARCH_HISTORY,
    []
  );

  const handleClick = () => {
    alert(JSON.stringify(searchHistoryLocalStorage));
  };

  return <Button onClick={handleClick}>Show history</Button>;
};

export default ShowHistoryButton;

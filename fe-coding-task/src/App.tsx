import { FormProvider, useForm } from "react-hook-form";
import Graph from "./components/Graph";
import { useApi } from "./hooks/useApi";
import "./styles/App.css";

import ContentsSelector from "./components/ContentsSelector";
import QuarterSelector from "./components/QuarterSelector";
import TypeOfDwellingSelector from "./components/TypeOfDwellingSelector";

import { GraphsWrapper, InputsWrapper } from "./styled";
import { FormType } from "./types";
import ShowHistoryButton from "./components/ShowHistoryButton";

const defaultFormState: FormType = {
  houseType: [],
  quartersRange: [],
  contents: [],
};

function App() {
  const formMethods = useForm<FormType>({
    defaultValues: defaultFormState,
  });
  useApi(formMethods);

  return (
    <FormProvider {...formMethods}>
      <InputsWrapper>
        <QuarterSelector />
        <TypeOfDwellingSelector />
        <ContentsSelector />
      </InputsWrapper>
      <GraphsWrapper>
        <Graph />
      </GraphsWrapper>
      <ShowHistoryButton/>
    </FormProvider>
  );
}

export default App;

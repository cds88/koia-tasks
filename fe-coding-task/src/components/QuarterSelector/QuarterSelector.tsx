import { useFormContext } from "react-hook-form";

import { getYearsWithQuarters } from "./utils";
import { FormType } from "../../types";
import MultipleSelectChip from "../MultiSelect";

const names = getYearsWithQuarters();

const QuarterSelector = () => {
  const { setValue, watch } = useFormContext<FormType>();

  return (
    <MultipleSelectChip
      onChange={(value) => {
        setValue("quartersRange", value);
      }}
      selectedValue={watch("quartersRange")}
      label="Quarter"
      names={names}
    />
  );
};

export default QuarterSelector;

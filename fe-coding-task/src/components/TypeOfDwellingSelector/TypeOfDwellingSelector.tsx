import { useFormContext } from "react-hook-form";
import MultipleSelectChip from "../MultiSelect";
import { FormType } from "../../types";

const TypeOfDwellingSelector = () => {
  const { setValue, watch } = useFormContext<FormType>();

  return (
    <MultipleSelectChip
      onChange={(value) => {
        setValue("houseType", value);
      }}
      selectedValue={watch("houseType")}
      label={"Type of dwelling"}
      names={["00", "02", "03"]}
      labels={{
        "00": "Total",
        "02": "Row houses",
        "03": "Multi-dweling",
      }}
    />
  );
};

export default TypeOfDwellingSelector;

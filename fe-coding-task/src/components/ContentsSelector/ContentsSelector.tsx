import { useFormContext } from "react-hook-form";
import MultipleSelectChip from "../MultiSelect";
import { FormType } from "../../types";

const ContentsSelector = () => {
  const { setValue, watch } = useFormContext<FormType>();
  return (
    <MultipleSelectChip
      selectedValue={watch("contents")}
      onChange={(value) => {
        setValue("contents", value);
      }}
      label="Contents"
      names={["KvPris", "Omsetninger"]}
      labels={{
        KvPris: "Freeholder per km2(NOK)",
        Omsetninger: "Number of sales",
      }}
    />
  );
};

export default ContentsSelector;

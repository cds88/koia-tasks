import { SxProps, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { FormType, FormTypeNames } from "../types";

export type TextInputType = {
  formTypeName: FormTypeNames;
};

const CustomTextFieldSxProps: SxProps = {
  borderColor: "white",
  input: {
    color: "white",
  },
  fieldset: {
    borderColor: "white",
  },
};

const TextInput = ({ formTypeName }: TextInputType) => {
  const { register } = useFormContext<FormType>();

  const registry = register(formTypeName);

  return (
    <TextField sx={CustomTextFieldSxProps} variant="outlined" {...registry} />
  );
};

export default TextInput;

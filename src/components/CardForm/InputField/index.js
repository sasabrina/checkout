import { Wrapper } from "globalStyles";
import FormContext from "context/formContext";
import { useContext } from "react";
import { formatCardForm } from "helpers";
import { StyledField } from "./styles";

export const InputField = ({ type = "text", placeholder, hint, name }) => {
  const { form, handleChange } = useContext(FormContext);
  const value = formatCardForm(form[name], name, "value");
  const maxLength = formatCardForm(form[name], name, "maxLength");

  return (
    <Wrapper key={name} margin="25px 0 0">
      <StyledField
        variant="standard"
        label={placeholder}
        placeholder={placeholder}
        helperText={hint}
        type={type}
        name={name}
        onChange={handleChange}
        value={value}
        inputProps={{ maxLength }}
        fullWidth
        size="small"
      />
    </Wrapper>
  );
};

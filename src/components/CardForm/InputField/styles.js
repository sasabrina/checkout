import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

// Custom MUI styles
export const StyledField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#282627",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#282627",
  },
});

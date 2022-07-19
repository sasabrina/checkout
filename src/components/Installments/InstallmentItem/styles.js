import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";
import { FormControlLabel } from "@mui/material";
import { Paragraph, Container, size } from "globalStyles";

export const StyledFormControlLabel = muiStyled((props) => (
  <FormControlLabel {...props} />
))(({ checked }) => ({
  backgroundColor: checked ? "rgba(143, 45, 245, 0.07)" : "#F2F2F2",
  borderRadius: 8,
  margin: "0 0 14px",
  padding: "14px 0",

  "& .MuiTypography-root": {
    width: "100%",
  },
}));

export const StyledText = styled(Paragraph)`
  font-size: 14px;
  font-weight: ${({ isTotal }) => (isTotal ? 700 : 400)};
  line-height: 16px;
  color: #282627;
`;

export const StyledContainer = styled(Container)`
  width: auto;

  @media ${size.media_md} {
    width: 100%;
  }
`;

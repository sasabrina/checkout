import { useState, useEffect } from "react";
import { Radio } from "@mui/material";
import { useRadioGroup } from "@mui/material/RadioGroup";
import { Container } from "globalStyles";
import { formatCurrency } from "helpers";
import { StyledFormControlLabel, StyledText, StyledContainer } from "./styles";

export const InstallmentItem = ({
  installment,
  total,
  financialRate,
  installmentPrice,
  currSymbol,
  i,
}) => {
  const [checked, setChecked] = useState();
  const radioGroup = useRadioGroup();

  const formatedPrice = `${currSymbol}${formatCurrency(installmentPrice)}`;
  const formatedTotal =
    financialRate === 0
      ? "Sin interés"
      : `${currSymbol}${formatCurrency(total)}`;

  useEffect(() => {
    if (radioGroup) {
      setChecked(radioGroup.value === total.toString());
    }
  }, [radioGroup, total]);

  return (
    <StyledFormControlLabel
      key={`label${i}`}
      id={`label${i}`}
      name={`total`}
      value={total.toString()}
      control={<Radio />}
      checked={checked}
      label={
        <Container
          flex
          justify="space-between"
          alignItems="center"
          gap="8px"
          padding="0 16px 0 0"
        >
          <StyledContainer>
            <StyledText>
              {`${installment} cuotas de ${formatedPrice}`}
            </StyledText>
            <StyledText>{`CF: ${formatCurrency(financialRate)}%`}</StyledText>
          </StyledContainer>

          <StyledText isTotal>{formatedTotal}</StyledText>
        </Container>
      }
    />
  );
};

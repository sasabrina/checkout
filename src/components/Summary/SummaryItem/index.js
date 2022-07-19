import { useContext } from "react";
import CheckoutDataContext from "context/checkoutDataContext";
import { Container, Paragraph } from "globalStyles";
import { formatCurrency } from "helpers";
import { StyledText } from "./styles";

export const SummaryItem = ({ item, currSymbol, isTotal = false }) => {
  const { total } = useContext(CheckoutDataContext);
  const formatedTotal = `${currSymbol}${formatCurrency(total)}`;
  const itemName = item.quantity
    ? `${item.name} x ${item.quantity}`
    : item?.name;
  const price = `${currSymbol}${formatCurrency(item.price)}`;

  return (
    <Container flex justify="space-between" as="li">
      {isTotal ? (
        <>
          <StyledText>{itemName}</StyledText>
          <StyledText>{formatedTotal}</StyledText>
        </>
      ) : (
        <>
          <Paragraph>{itemName}</Paragraph>
          <Paragraph>{price}</Paragraph>
        </>
      )}
    </Container>
  );
};

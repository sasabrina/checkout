import { SummaryItem } from "./SummaryItem";
import { StyledContainer } from "./styles";

export const Summary = ({ summary }) => {
  const total = { name: "Total", price: summary?.total_price };
  const items = summary?.items?.map((i) => ({
    name: i.name,
    quantity: i.quantity,
    price: i.unitPrice.amount,
  }));

  return (
    <StyledContainer as="ul">
      <SummaryItem item={total} currSymbol={summary?.currency_symbol} isTotal />

      {items?.map((item, i) => (
        <SummaryItem
          key={i}
          item={item}
          currSymbol={summary?.currency_symbol}
        />
      ))}
    </StyledContainer>
  );
};

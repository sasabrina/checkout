import { useContext, useEffect, useState } from "react";
import CheckoutDataContext from "context/checkoutDataContext";
import FormContext from "context/formContext";

import { RadioGroup } from "@mui/material";
import { InstallmentItem } from "./InstallmentItem";
import { Container } from "globalStyles";

export function Installments({ data }) {
  const { setTotal } = useContext(CheckoutDataContext);
  const { handleChange } = useContext(FormContext);
  const [items, setItems] = useState([]);
  const [value, setValue] = useState();

  useEffect(() => {
    if (data) {
      setItems(data?.installments);
      setValue(items[0]?.total.toString());
    }
  }, [data, items]);

  useEffect(() => setTotal(value), [setTotal, value]);

  const handleGroupChange = (e) => {
    setValue(e.target.value);
    handleChange(e);
  };

  return (
    <Container margin="14px 0 0">
      {data && (
        <RadioGroup
          name="use-radio-group"
          key={`radio-${value}`}
          value={value}
          onChange={handleGroupChange}
        >
          {items.map((item, i) => (
            <InstallmentItem
              key={i}
              {...{
                ...item,
                currSymbol: data.currency_symbol,
                i: i,
              }}
            />
          ))}
        </RadioGroup>
      )}
    </Container>
  );
}

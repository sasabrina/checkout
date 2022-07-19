import { createContext, useState } from "react";
import { useFetch } from "hooks";

const CheckoutDataContext = createContext();

const CheckoutDataProvider = ({ children }) => {
  const [data, isLoading, isError] = useFetch("./checkoutData.json", "get");
  const checkoutData = !isLoading ? data.data : "";
  const [total, setTotal] = useState(0);

  return (
    <CheckoutDataContext.Provider
      value={{ checkoutData, isLoading, isError, total, setTotal }}
    >
      {children}
    </CheckoutDataContext.Provider>
  );
};

export { CheckoutDataProvider };
export default CheckoutDataContext;

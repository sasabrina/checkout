import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { CheckoutDataProvider } from "./context/checkoutDataContext";
import { FormProvider } from "context/formContext";
import { GlobalStyle } from "./globalStyles";
import { Checkout, Error } from "./pages";

const App = () => {
  return (
    <Router>
      <FormProvider>
        <CheckoutDataProvider>
          <GlobalStyle />
          <Routes>
            <Route
              exact
              path="/"
              element={<Navigate replace to="/checkout" />}
            />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/error" element={<Error />} />
          </Routes>
        </CheckoutDataProvider>
      </FormProvider>
    </Router>
  );
};

export default App;

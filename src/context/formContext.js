import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    cardNumber: "",
    expirationDate: "",
    securityCode: "",
    name: "",
    idNumber: "",
    email: "",
    total: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    const updatedForm = {
      ...form,
      [name]: value,
    };
    setForm(updatedForm);
  };

  const handleSubmit = () => {
    // make POST request with form values as payload and handle errors
    console.log(form);
    navigate("/error");
  };

  return (
    <FormContext.Provider value={{ form, handleChange, handleSubmit }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;

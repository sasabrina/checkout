import { Container } from "globalStyles";
import { InputField } from "./InputField";

export const CardForm = () => {
  return (
    <form>
      <InputField
        placeholder="Número de tarjeta"
        label="Número de tarjeta"
        name="cardNumber"
      />

      <Container flex gap="16px" justify="space-between">
        <InputField
          placeholder="MM/AA"
          hint="Fecha de expiración"
          name="expirationDate"
        />

        <InputField
          placeholder="Cód. de seguridad"
          hint="3 números al dorso de tarjeta"
          name="securityCode"
        />
      </Container>

      <InputField
        placeholder="Nombre de titular"
        hint="Como figura en la tarjeta"
        name="name"
      />

      <InputField
        placeholder="DNI del titular"
        hint="Número de documento"
        name="idNumber"
      />
    </form>
  );
};

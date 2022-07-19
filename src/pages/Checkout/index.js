import { useContext } from "react";
import LockIcon from "@mui/icons-material/Lock";
import CheckoutDataContext from "context/checkoutDataContext";
import FormContext from "context/formContext";
import { Loading, Header, Summary, CardForm, Installments } from "components";
import { InputField } from "components/CardForm/InputField";
import {
  MainContainer,
  Container,
  Paragraph,
  Button,
  ExternalLink,
} from "globalStyles";
import {
  Title,
  Subtitle,
  StyledContainer,
  SummarySection,
  FormSection,
  InstallmentsSection,
  PersonalInfoSection,
} from "./styles";

export const Checkout = () => {
  const { checkoutData, isLoading } = useContext(CheckoutDataContext);
  const { handleSubmit } = useContext(FormContext);

  return (
    <>
      {isLoading ? (
        <Loading loading={isLoading} />
      ) : (
        <>
          <Header darkTheme title={checkoutData?.shop_name} />
          <MainContainer>
            <Title>Completá los datos para pagar</Title>

            <StyledContainer flex>
              <SummarySection as="section" margin="16px 0 24px">
                <Summary summary={checkoutData?.attributes} />
              </SummarySection>

              <FormSection as="section">
                <Paragraph>
                  Paga con tarjeta de crédito o débito.{" "}
                  <ExternalLink>Ver tarjetas</ExternalLink>
                </Paragraph>
                <CardForm />
              </FormSection>

              <InstallmentsSection as="section" margin="40px 0">
                <Subtitle>Cuotas</Subtitle>
                <Installments data={checkoutData && checkoutData.attributes} />
              </InstallmentsSection>

              <PersonalInfoSection as="section">
                <Subtitle>Datos Personales</Subtitle>
                <form>
                  <InputField
                    name="email"
                    placeholder="E-mail"
                    hint="A este email te enviaremos el recibo de compra"
                  />
                </form>
              </PersonalInfoSection>
            </StyledContainer>

            <Container margin="23px 0 0" flex column alignItems="center">
              <Button width="100%" onClick={handleSubmit}>
                Continuar
              </Button>
              <Container
                flex
                justify="center"
                alignItems="center"
                margin="23px 0"
              >
                <LockIcon sx={{ color: "#999999" }} />
                <Paragraph>
                  Todas las transacciones son seguras y encriptadas.
                </Paragraph>
              </Container>
            </Container>
          </MainContainer>
        </>
      )}
    </>
  );
};

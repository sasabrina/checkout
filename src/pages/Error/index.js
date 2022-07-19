import { useContext } from "react";
import CheckoutDataContext from "context/checkoutDataContext";
import { Header, Loading } from "components";
import { Alert } from "components/icons";
import {
  MainContainer,
  Container,
  Wrapper,
  Button,
  ButtonLink,
} from "globalStyles";
import { StyledHeading, StyledText } from "./styles";

export const Error = () => {
  const { checkoutData, isLoading } = useContext(CheckoutDataContext);

  return (
    <>
      {isLoading && <Loading loading={isLoading} />}
      {!isLoading && (
        <>
          <Header title={checkoutData?.shop_name} />
          <MainContainer>
            <Container
              flex
              column
              alignItems="center"
              height="100vh"
              padding="48px 0"
            >
              <Wrapper>
                <Alert />
              </Wrapper>
              <StyledHeading>Transacción denegada</StyledHeading>
              <StyledText>
                ¡Disculpas! Se ha producido un error, por favor vuelve a
                intentar.
              </StyledText>
              <Button as={ButtonLink} url="/checkout">
                Volver a intentar
              </Button>
            </Container>
          </MainContainer>
        </>
      )}
    </>
  );
};

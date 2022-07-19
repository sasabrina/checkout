import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

const MEDIA_SM = "480px";
const MEDIA_MD = "768px";
const MEDIA_LG = "1240px";
const MEDIA_XL = "1420px";

export const size = {
  media_sm: `(min-width: ${MEDIA_SM})`,
  media_md: `(min-width: ${MEDIA_MD})`,
  media_lg: `(min-width: ${MEDIA_LG})`,
  media_xl: `(min-width: ${MEDIA_XL})`,
};

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    color: #333333;
}
`;

export const MainContainer = styled.main`
  padding: 0 20px;
  max-width: 500px;
  margin: auto;

  @media ${size.media_lg} {
    max-width: unset;
    width: max-content;
  }
`;

export const Container = styled.div`
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "")};
  display: ${({ flex }) => (flex ? "flex" : "block")};
  ${({ column }) => column && "flex-direction: column;"}
  justify-content: ${({ justify }) => (justify ? justify : "")};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "")};
  gap: ${({ gap }) => (gap ? gap : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
`;

export const Wrapper = styled.div`
  flex-grow: ${({ grow }) => (grow ? grow : "")};
  flex-shrink: ${({ shrink }) => (shrink ? shrink : "")};
  width: ${({ width }) => (width ? width : "")};
  height: ${({ height }) => (height ? height : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
`;

export const H1 = styled.h1`
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
`;

export const H2 = styled.h2`
  font-size: 22px;
  font-weight: 500;
`;

export const H3 = styled.h3`
  font-size: 16px;
`;

export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #4b4849;
`;

export const Button = styled.button`
  color: #fff;
  background-color: #8f2df5;
  font-size: 16px;
  font-weight: 500;
  padding: ${({ padding }) => (padding ? padding : "14px 42px")};
  border-radius: 24px;
  border: none;
  text-decoration: none;
  width: ${({ width }) => (width ? width : "")};
  max-width: 312px;
  cursor: pointer;
`;

export const ButtonLink = (props) => <Link {...props} to={props.url} />;

export const ExternalLink = styled.a`
  text-decoration: none;
  color: #8f2df5;
`;

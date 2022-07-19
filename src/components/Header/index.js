import React from "react";
import { Wrapper } from "globalStyles";
import { Logo } from "components";
import { StyledHeader, Title } from "./styles";

export const Header = ({ title, darkTheme = false }) => {
  return (
    <StyledHeader isDark={darkTheme}>
      <Wrapper>
        <Logo color={darkTheme ? "#fff" : "#191C3C"} />
      </Wrapper>

      <Wrapper>
        <Title isDark={darkTheme}>{title}</Title>
      </Wrapper>
    </StyledHeader>
  );
};

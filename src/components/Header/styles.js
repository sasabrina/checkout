import styled from "styled-components";
import { H1 } from "globalStyles";

export const StyledHeader = styled.header`
  width: 100%;
  padding: 18px 20px 12px;
  background-color: ${({ isDark }) => (isDark ? "#191C3C" : "#fff")};
  display: flex;
  justify-content: space-between;
`;

export const Title = styled(H1)`
  color: ${({ isDark }) => (isDark ? "#fff" : "#585858")};
`;

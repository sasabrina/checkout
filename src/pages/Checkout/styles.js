import styled from "styled-components";
import { H2, Wrapper, size, Container } from "globalStyles";

const widthSection = "300px";

export const Title = styled(H2)`
  margin-top: 30px;

  @media ${size.media_lg} {
    margin-bottom: 20px;
  }
`;

export const Subtitle = styled(H2)`
  font-size: 20px;
  margin-top: 30px;
`;

export const StyledContainer = styled(Container)`
  flex-direction: column;

  @media ${size.media_lg} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 700px;
    margin: 0 auto;
  }
`;

export const SummarySection = styled(Wrapper)`
  @media ${size.media_lg} {
    width: ${widthSection};
    order: 2;
  }
`;

export const FormSection = styled(Wrapper)`
  @media ${size.media_lg} {
    width: ${widthSection};
    order: 1;
    margin-top: 29px;
  }
`;
export const InstallmentsSection = styled(Wrapper)`
  @media ${size.media_lg} {
    width: ${widthSection};
    order: 4;
    margin-top: -300px;
  }
`;
export const PersonalInfoSection = styled(Wrapper)`
  @media ${size.media_lg} {
    width: ${widthSection};
    order: 3;
  }
`;

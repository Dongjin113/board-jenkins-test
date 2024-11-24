import styled from "styled-components";
import * as COLOR from "../../constants/color";

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  background-color: ${COLOR.White};
  min-height: 200px;

  @media screen and (max-width: 800px) {
    justify-content: flex-start;
  }
`;

export const FooterContent = styled.div`
  margin-left: 10px;
  padding-left: 10px;
  display: flex;
  white-space: nowrap;

  a {
    color: inherit;
  }
`;

import styled from "styled-components";
import * as COLOR from "../../constants/color";

export const TagBox = styled.div`
  display: flex;
  margin-right: 30px;
  padding-top: 20px;
`;

export const Tag = styled.button`
  background-color: ${COLOR.Primary};
  border: none;
  border-radius: 20px;
  width: 75px;
  height: 30px;
  color: white;
  white-space: nowrap;

  &:hover {
    cursor: pointer;
  }
`;

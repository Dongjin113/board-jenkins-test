import styled from "styled-components";
import * as COLOR from "../../constants/color";
import * as FONT from "../../constants/font";
import { FaSearch } from "react-icons/fa";

export const Nav = styled.nav`
  position: relative;
  padding: 1rem;
  background-color: ${COLOR.Sub2};
  opacity: 0.8;
  min-height: 95px;
  font-size: ${FONT.L};
  color: ${COLOR.White};
`;

export const Logo = styled.div`
  padding-left: 5%;
  margin-right: 100px;

  img {
    z-index: 1;
    width: 150px;
    height: 60px;
    background-color: transparent; /* 배경을 투명으로 설정 */
    color: white; /* 아이콘 색상을 하얀색으로 설정 */
  }
`;

export const NavContainer = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1300px) {
    justify-content: flex-start;
  }
`;

export const Menu = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
`;

export const Item = styled.li`
  margin-right: 3rem;
  text-align: center;
  white-space: nowrap;

  &:hover {
    color: black;
    border-bottom: 3px solid #000;
  }
`;

export const Searchbox = styled.div`
  display: flex;
  align-items: center;
  padding-right: 2rem;
`;

export const RightMenu = styled.div`
  display: flex;
  align-items: center;
  padding-right: 10%;
`;

export const SignIn = styled.div`
  padding-right: 2rem;
  white-space: nowrap;
`;

export const SignOut = styled.div`
  padding-right: 2rem;
  white-space: nowrap;
`;

export const SignUp = styled.div`
  padding-right: 2rem;
  white-space: nowrap;
`;

export const SearchIcon = styled(FaSearch)`
  color: #333;
  font-size: 1.5rem;
  margin-right: 1rem;
`;

export const SearchInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 50px;
  height: 40px;
  outline: none;
  width: ${({ isOpen }) => (isOpen ? "350px" : "0")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transition: width 0.7s ease, opacity 0.7s ease;
`;

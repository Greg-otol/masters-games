import styled from "styled-components";
import search from "../../../assets/img/search.png";
import { theme } from "../../../styleGlobal";

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const Search = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const InputSearch = styled.input`
  background-image: url(${search});
  background-repeat: no-repeat;
  background-position: 99% 50%;
  background-size: 25px;

  display: flex;
  width: 100%;
  height: 40px;
  padding: 10px;
  font-size: 18px;
  outline: none;
  border-radius: 5px;
  border: 1px solid ${theme.colors.primary};
`;

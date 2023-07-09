import styled from "styled-components";
import { theme } from "../../../styleGlobal";

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

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
  width: 100%;
  height: 40px;
  padding: 10px;
  font-size: 18px;
  color: ${theme.colors.secondary};
  outline: none;
  border-radius: 5px;
  border: 1px solid ${theme.colors.secondary};
`;

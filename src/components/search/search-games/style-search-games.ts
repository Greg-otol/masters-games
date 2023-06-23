import styled from "styled-components";
import search from "../../../assets/img/search.png";

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Search = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;

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
  padding: 10px;
  margin: 10px;
  outline: none;
  border-radius: 5px;
  border: 1px solid rgb(37, 150, 190);
`;

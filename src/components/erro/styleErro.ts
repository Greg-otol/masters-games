import styled from "styled-components";
import { theme } from "../../styleGlobal";

export const ErroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  text-align: center;
  padding: 10px;
`;

export const ErroImg = styled.img`
  width: 20%;
  margin-bottom: 20px;

  @media (max-width: 760px) {
    width: 50%;
  }
`;

export const ErroTitle = styled.h2`
  color: ${theme.colors.secondary};
  padding: 20px;
`;

export const ErroButton = styled.button`
  background-color: ${theme.colors.tertiary};
  padding: 20px;
  color: ${theme.colors.secondary};
  font-size: 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.5s ease-out;

  &:hover {
    box-shadow: 1px 1px 5px 2px ${theme.colors.secondary};
  }
`;

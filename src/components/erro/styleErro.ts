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
  width: 50%;
  margin-bottom: 20px;

  @media (max-width: 760px) {
    width: 80%;
  }
`;

export const ErroTitle = styled.h2`
  color: ${theme.colors.tertiary};
  padding: 20px;
`;

export const ErroButton = styled.button`
  background-color: ${theme.colors.primary};
  padding: 20px;
  color: ${theme.colors.secondary};
  font-size: 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

import styled from "styled-components";
import { theme } from "../../styleGlobal";

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const RegisterImg = styled.img`
  width: 80px;
`;

export const RegisterTitle = styled.h2`
  padding: 20px;
  text-align: center;
  color: ${theme.colors.secondary};
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;

  @media (max-width: 720px) {
    width: 100%;
  }
`;

export const RegisterLabel = styled.label`
  width: 80%;
  color: ${theme.colors.secondary};
  font-weight: bold;
`;

export const RegisterInput = styled.input`
  width: 80%;
  height: 40px;
  border-radius: 5px;
  padding-left: 10px;
  border: 1px solid ${theme.colors.secondary};
  outline: none;
  font-size: 16px;
  color: ${theme.colors.secondary};

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #242222 inset;
    -webkit-text-fill-color: #f0f0f0 !important;
  }
`;

export const RegisterButton = styled.button`
  width: 80%;
  height: 40px;
  font-size: 20px;
  color: ${theme.colors.secondary};
  margin: 10px 0 5px 0;
  background-color: ${theme.colors.tertiary};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  transition: all 0.5s ease-out;

  &:hover {
    box-shadow: 1px 1px 5px 2px ${theme.colors.secondary};
  }
`;

export const RegisterDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  width: 80%;
  gap: 10px;

  @media (max-width: 385px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const RegisterP = styled.p`
  text-decoration: none;
  color: ${theme.colors.secondary};
  font-weight: bold;
`;

import styled from "styled-components";
import { theme } from "../../../styleGlobal";

export const ContainerOption = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OptionSelect = styled.select`
  height: 40px;
  font-size: 18px;
  color: ${theme.colors.secondary};
  border: 1px solid ${theme.colors.secondary};
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  text-align: center;
`;

export const Options = styled.option`
  text-align: center;
  background-color: ${theme.colors.tertiary};
`;

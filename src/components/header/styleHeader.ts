import styled from "styled-components";
import { theme } from "../../styleGlobal";

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: ${theme.colors.primary};
  padding-top: 20px;
  text-align: center;
`;

export const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const HeaderH1 = styled.h1`
  color: ${theme.colors.secondary};
  cursor: pointer;

  @media (max-width: 500px) {
    position: absolute;
    left: 10px;
    top: 20px;
    font-size: 25px;
  }
`;

export const HeaderImg = styled.img`
  position: absolute;
  right: 10px;
  top: 20px;
  width: 30px;
  cursor: pointer;
`;

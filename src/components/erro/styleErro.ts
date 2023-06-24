import styled from "styled-components";

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
  color: rgb(40, 40, 40);
  padding: 20px;
`;

export const ErroButton = styled.button`
  padding: 20px;
  color: rgb(40, 40, 40);
  font-size: 20px;
  border: 2px solid rgb(172, 0, 0);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.8s ease-out;

  &:hover {
    background: rgba(172, 0, 0, 0.8);
    color: rgb(250, 250, 250);
    border: 2px solid rgba(0, 0, 0, 0);
  }
`;

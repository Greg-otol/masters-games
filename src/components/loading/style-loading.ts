import styled, { keyframes } from "styled-components";

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Rotate = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

export const LoadingDiv = styled.div`
  position: fixed;
  top: 300px;
  animation: ${Rotate} 1s infinite;
  border: 6px solid #e5e5e5;
  border-radius: 50%;
  border-top-color: rgb(172, 0, 0);
  height: 100px;
  width: 100px;
  z-index: 2;

  @media (max-width: 600px) {
    height: 50px;
    width: 50px;
  }
`;

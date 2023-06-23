import styled from "styled-components";

export const ContainerOption = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OptionSelect = styled.select`
  height: 40px;
  font-size: 18px;
  color: rgb(60, 60, 60);
  border: 1px solid rgb(172, 0, 0);
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  text-align: center;
`;

export const Options = styled.option`
  text-align: center;
  background-color: rgba(172, 0, 0, 0.6);
`;

import styled from "styled-components";

export const Cards = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
  padding: 3rem;
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  border: 1px solid teal;
`;

export const Title = styled.h2`
  text-align: center;
`;

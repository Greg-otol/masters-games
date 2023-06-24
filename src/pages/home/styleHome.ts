import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 80px;
`;

export const HomeSearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 20px 50px 0 50px;
  gap: 10px;

  @media (max-width: 700px) {
    padding: 20px 10px 0 10px;
  }
`;

export const Cards = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 2rem;
  padding: 20px;

  @media (max-width: 700px) {
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    padding: 10px;
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  border: 1px solid rgb(172, 0, 0);
  border-radius: 5px;
`;

export const Title = styled.h2`
  text-align: center;
`;

export const HomeImg = styled.img`
  border-radius: 5px;
`;

export const HomeGenre = styled.p`
  font-weight: bold;
  margin-top: 5px;
  text-align: center;
`;

export const HomeDeveloped = styled.p`
  font-weight: bold;
  margin-top: 5px;
  text-align: center;
`;

export const HomeP = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: rgba(172, 0, 0, 0.8);
  padding-top: 150px;
`;

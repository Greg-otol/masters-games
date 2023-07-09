import styled from "styled-components";
import { theme } from "../../styleGlobal";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding-top: 80px;
`;

export const HomeSearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
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
  border: 1px solid ${theme.colors.primary};
  border-radius: 5px;
`;

export const Title = styled.h2`
  text-align: center;
  color: ${theme.colors.tertiary};
`;

export const HomeImg = styled.img`
  border-radius: 5px;
`;

export const HomeGenre = styled.p`
  font-weight: bold;
  margin-top: 5px;
  text-align: center;
  color: ${theme.colors.tertiary};
`;

export const HomeDeveloped = styled.p`
  font-weight: bold;
  margin-top: 5px;
  text-align: center;
  color: ${theme.colors.tertiary};
`;

export const HomeP = styled.p`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: ${theme.colors.primary};
  padding-top: 150px;
`;

export const OrdersDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 60%;
  gap: 10px;

  @media (max-width: 700px) {
    flex-direction: column;
    width: 100%;
    gap: 0;
  }
`;

export const OrdersButton = styled.button`
  width: 80%;
  height: 40px;
  font-size: 16px;
  color: ${theme.colors.secondary};
  margin: 10px 0 5px 0;
  background-color: ${theme.colors.primary};
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

export const DivStarFavorite = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Favorities = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  color: black;
`;

interface StarProps {
  active: boolean;
}

export const StarDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StarP = styled.p``;

export const Star = styled.span<StarProps>`
  color: ${(props) => (props.active ? "#ffd000" : "gray")};
  cursor: pointer;
  font-size: 35px;
`;

export const UserP = styled.p`
  color: ${theme.colors.primary};
  text-align: center;
  padding-top: 10px;
`;

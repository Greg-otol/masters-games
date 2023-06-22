import { Card, Cards, Title } from "./style-home";
import { useEffect, useState } from "react";
import { gamesGetAll } from "../../services/games-services/games-get-all";
import { IGames } from "../../interfaces/IGames";

export function Home() {
  const [games, setGames] = useState<IGames[]>([]);

  useEffect(() => {
    loadGames();
  }, []);

  const loadGames = async () => {
    try {
      const response = await gamesGetAll();
      setGames(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Cards>
      {games.map((game) => {
        return (
          <Card key={game.id}>
            <Title>{game.title}</Title>
            <img src={game.thumbnail} />
          </Card>
        );
      })}
    </Cards>
  );
}

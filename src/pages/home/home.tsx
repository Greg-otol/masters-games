import { Card, Cards, Title } from "./style-home";
import { useEffect, useState } from "react";
import { gamesGetAll } from "../../services/games-services/games-get-all";
import { IGames } from "../../interfaces/IGames";
import { Loading } from "../../components/loading/loading";
import { SearchGames } from "../../components/search/search-games";

export function Home() {
  const [games, setGames] = useState<IGames[]>([]);
  const [search, setSearch] = useState<string>("");

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

  const searchGames = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <SearchGames value={search} handleSearchValue={searchGames} />
      <Cards>
        {games.length ? <></> : <Loading />}

        {search !== ""
          ? games
              .filter((e: IGames) =>
                e.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((game) => {
                return (
                  <Card key={game.id}>
                    <Title>{game.title}</Title>
                    <img src={game.thumbnail} />
                  </Card>
                );
              })
          : games.map((game) => {
              return (
                <Card key={game.id}>
                  <Title>{game.title}</Title>
                  <img src={game.thumbnail} />
                </Card>
              );
            })}
      </Cards>
    </>
  );
}

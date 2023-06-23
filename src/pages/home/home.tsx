import { Card, Cards, Title } from "./style-home";
import { useEffect, useState } from "react";
import { gamesGetAll } from "../../services/games-services/games-get-all";
import { IGames } from "../../interfaces/IGames";
import { Loading } from "../../components/loading/loading";
import { SearchGames } from "../../components/search/search-games/search-games";
import { GenrerSelect } from "../../components/search/search-genre/search-genre";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  const [games, setGames] = useState<IGames[]>([]);
  const [search, setSearch] = useState<string>("");
  const [searchGenre, setSearchGenre] = useState<string>("");

  const erroStatus = [500, 502, 503, 504, 507, 508, 509];

  useEffect(() => {
    loadGames();
  }, []);

  const loadGames = async () => {
    try {
      const response = await gamesGetAll();
      setGames(response.data);
      
      if (erroStatus.includes(response.status)) {
        navigate("/erro-servidor");
      }
    } catch (error: any) {
      if (erroStatus.includes(error)) {
        navigate("/erro-servidor");
      }
    }
  };

  const searchGames = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const changeSearchGenre = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchGenre(e.target.value);
  };

  const genre = games
    .filter((genre, index) => games.indexOf(genre) === index)
    .map((test) => test.genre);

    const filteredGames = games.filter(game => {
      if (searchGenre && game.genre !== searchGenre) {
        return false;
      }
      if (search && !game.title.toLowerCase().includes(search.toLowerCase())) {
        return false;
      }
      return true;
    });

  return (
    <>
      {!games.length ? <Loading /> : <></>}
      <SearchGames value={search} handleSearchValue={searchGames} />
      <GenrerSelect valueMap={genre} handleSearchValue={changeSearchGenre} />
      <Cards>
        {
          filteredGames.map((game) => {
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

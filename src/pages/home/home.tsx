import {
  Card,
  Cards,
  HomeContainer,
  HomeDeveloped,
  HomeGenre,
  HomeImg,
  HomeP,
  HomeSearchContainer,
  Title,
} from "./styleHome";
import { useEffect, useRef, useState } from "react";
import { getAllGames } from "../../services/servicesGames/getAllGames";
import { IGames } from "../../interfaces/IGames";
import { Loading } from "../../components/loading/loading";
import { SearchGames } from "../../components/search/searchGames/searchGames";
import { GenrerSelect } from "../../components/search/searchGenre/searchGenre";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";

export function Home() {
  const navigate = useNavigate();
  const [games, setGames] = useState<IGames[]>([]);
  const [search, setSearch] = useState<string>("");
  const [searchGenre, setSearchGenre] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const loadGames = async () => {
      try {
        timerRef.current = window.setTimeout(() => {
          navigate("/server-time-exceeded");
        }, 5000);

        const response = await getAllGames();
        setGames(response.data);
        setIsLoading(false);
        window.clearTimeout(timerRef.current);
      } catch (error: any) {
        if (
          error.response &&
          [500, 502, 503, 504, 507, 508, 509].includes(error.response.status)
        ) {
          navigate("/server-erro");
        } else {
          navigate("/server-not-response");
        }
        window.clearTimeout(timerRef.current?.toString());
      }
    };

    loadGames();
    return () => {
      window.clearTimeout(timerRef.current?.toString());
    };
  }, [navigate]);

  const changeSearchGames = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const changeSearchGenre = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "default") {
      setSearchGenre("");
    } else {
      setSearchGenre(e.target.value);
    }
  };

  const genre = games
    .filter((genre, index) => games.indexOf(genre) === index)
    .map((test) => test.genre);

  const filteredGames = games.filter((game) => {
    if (searchGenre && game.genre !== searchGenre) {
      return false;
    }
    if (search && !game.title.toLowerCase().includes(search.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <HomeContainer>
      <Header />
      <HomeSearchContainer>
        <SearchGames value={search} handleSearchValue={changeSearchGames} />
        <GenrerSelect valueMap={genre} handleSearchValue={changeSearchGenre} />
      </HomeSearchContainer>
      {isLoading ? (
        <Loading />
      ) : filteredGames.length === 0 ? (
        <HomeP>Nada encontrado com esse termo!</HomeP>
      ) : (
        <Cards>
          {filteredGames.map((game) => {
            return (
              <Card key={game.id}>
                <Title>{game.title}</Title>
                <HomeImg src={game.thumbnail} alt="Imagem da capa do jogo" />
                <HomeDeveloped>Por: {game.developer}</HomeDeveloped>
                <HomeGenre>Gênero: {game.genre}</HomeGenre>
              </Card>
            );
          })}
        </Cards>
      )}
      <Footer />
    </HomeContainer>
  );
}

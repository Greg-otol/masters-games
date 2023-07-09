import {
  Card,
  Cards,
  DivStarFavorite,
  Favorities,
  HomeContainer,
  HomeDeveloped,
  HomeGenre,
  HomeImg,
  HomeP,
  HomeSearchContainer,
  OrdersButton,
  OrdersDiv,
  Star,
  StarDiv,
  Title,
  UserP,
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
import heartGray from "../../assets/img/heart-gray.png";
import heartRed from "../../assets/img/heart-red.png";
import {
  collection,
  doc,
  setDoc,
  deleteDoc,
  query,
  getDocs,
  where,
  onSnapshot,
  getFirestore,
} from "firebase/firestore";
import { auth, firestore } from "../../services/firebase";
import { Favorites } from "../../components/favorites/favorites";

export function Home() {
  const navigate = useNavigate();
  const [games, setGames] = useState<IGames[]>([]);
  const [search, setSearch] = useState<string>("");
  const [searchGenre, setSearchGenre] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const timerRef = useRef<number | null>(null);
  const [favorites, setFavorites] = useState<IGames[]>([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [ratings, setRatings] = useState<{ [id: string]: number }>({});
  const [sortByRating, setSortByRating] = useState<boolean>(false);
  const [shrunkCards, setShrunkCards] = useState<number[]>([]);

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

  useEffect(() => {
    const loadFavorites = async () => {
      const favoritesQuery = query(collection(firestore, "favorites"));
      const favoritesSnapshot = await getDocs(favoritesQuery);
      const favoriteGames: IGames[] = [];
      favoritesSnapshot.forEach((doc) => {
        const favoriteGame = doc.data() as IGames;
        favoriteGames.push(favoriteGame);
      });
      setFavorites(favoriteGames);
    };

    loadFavorites();
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(firestore, "favorites"),
      (snapshot) => {
        const favoriteGames: IGames[] = [];
        snapshot.forEach((doc) => {
          const favoriteGame = doc.data() as IGames;
          favoriteGames.push(favoriteGame);
        });
        setFavorites(favoriteGames);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  const handleFavorite = async (game: IGames) => {
    try {
      const isFavorite = favorites.find((favorite) => favorite.id === game.id);
      if (auth.currentUser) {
        if (isFavorite) {
          const favoriteDocQuery = query(
            collection(firestore, "favorites"),
            where("id", "==", game.id)
          );
          const favoriteDocs = await getDocs(favoriteDocQuery);
          favoriteDocs.forEach(async (doc) => {
            await deleteDoc(doc.ref);
          });
          setFavorites(favorites.filter((favorite) => favorite.id !== game.id));
        } else {
          if (shrunkCards.includes(game.id)) {
            setShrunkCards((prevCards) =>
              prevCards.filter((cardId) => cardId !== game.id)
            );
          } else {
            setShrunkCards((prevCards) => [...prevCards, game.id]);
          }

          const favoriteGame = { ...game };
          const favoriteDoc = doc(collection(firestore, "favorites"));
          await setDoc(favoriteDoc, favoriteGame);
          setFavorites([...favorites, favoriteGame]);
        }
      } else {
        console.log("Não está logado!");
        navigate("/auth");
      }
    } catch (error) {
      console.error("Erro ao favoritar o jogo:", error);
    }
  };

  const isFavorite = (game: IGames) => {
    return favorites.some((favorite) => favorite.id === game.id);
  };

  const handleToggleFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  const handleRating = (gameId: number, rating: number) => {
    if (auth.currentUser) {
      setRatings((prevRatings) => ({
        ...prevRatings,
        [gameId.toString()]: rating,
      }));
    } else {
      console.log("Não está logado!");
      navigate("/auth");
    }
  };

  useEffect(() => {
    // Recuperar as classificações do Firestore ao carregar a página
    const fetchRatings = async () => {
      try {
        const db = getFirestore();
        const ratingsCollection = collection(db, "ratings");
        const ratingsSnapshot = await getDocs(ratingsCollection);
        const ratingsData: { [id: string]: number } = {};
        ratingsSnapshot.forEach((doc) => {
          ratingsData[doc.id] = doc.data().rating;
        });
        setRatings(ratingsData);
      } catch (error) {
        console.error("Erro ao recuperar as classificações:", error);
      }
    };
    fetchRatings();
  }, []);

  useEffect(() => {
    // Salvar as classificações no Firestore sempre que forem alteradas
    const saveRatings = async () => {
      try {
        const db = getFirestore();
        const ratingsCollection = collection(db, "ratings");
        Object.entries(ratings).forEach(([gameId, rating]) => {
          const gameDoc = doc(ratingsCollection, gameId);
          setDoc(gameDoc, { rating });
        });
      } catch (error) {
        console.error("Erro ao salvar as classificações:", error);
      }
    };
    saveRatings();
  }, [ratings]);

  const handleSortByRating = () => {
    setSortByRating((prevSortByRating) => !prevSortByRating);
  };

  useEffect(() => {
    // Ordenar os jogos com base nas classificações
    const sortedGames = [...games].sort((a, b) => {
      const ratingA = ratings[a.id];
      const ratingB = ratings[b.id];

      if (ratingA === undefined && ratingB === undefined) {
        return 0;
      } else if (ratingA === undefined) {
        return 1;
      } else if (ratingB === undefined) {
        return -1;
      }

      return sortByRating ? ratingB - ratingA : ratingA - ratingB;
    });

    setGames(sortedGames);
  }, [ratings, sortByRating]);

  return (
    <HomeContainer>
      <Header />
      {auth.currentUser ? (
        <UserP>Usuário logado: {auth.currentUser.email}</UserP>
      ) : (
        <UserP>Usuário não logado</UserP>
      )}
      <HomeSearchContainer>
        <SearchGames value={search} handleSearchValue={changeSearchGames} />
        <GenrerSelect valueMap={genre} handleSearchValue={changeSearchGenre} />
      </HomeSearchContainer>
      <OrdersDiv>
        <OrdersButton onClick={handleToggleFavorites}>
          {showFavorites ? "Mostrar Todos" : "Mostrar Favoritos"}
        </OrdersButton>
        <OrdersButton onClick={handleSortByRating}>
          {sortByRating
            ? "Ordenar por menores avaliações"
            : "Ordenar por maiores avaliações"}
        </OrdersButton>
      </OrdersDiv>
      {isLoading ? (
        <Loading />
      ) : filteredGames.length === 0 ? (
        <HomeP>Nada encontrado com esse termo!</HomeP>
      ) : showFavorites ? (
        <Favorites
          favorites={favorites}
          allGames={filteredGames}
          handleFavorite={handleFavorite}
          handleRating={handleRating}
          ratings={ratings}
        />
      ) : (
        <Cards>
          {filteredGames.map((game) => {
            return (
              <Card key={game.id} isShrunk={shrunkCards.includes(game.id)}>
                <DivStarFavorite>
                  <Favorities
                    onClick={() => handleFavorite(game)}
                    src={isFavorite(game) ? heartRed : heartGray}
                    alt="Imagem de um coração"
                  />
                  <StarDiv>
                    {[1, 2, 3, 4].map((value) => (
                      <Star
                        key={value}
                        active={value <= (ratings[game.id] || 0)}
                        onClick={() => handleRating(game.id, value)}
                      >
                        ★
                      </Star>
                    ))}
                  </StarDiv>
                </DivStarFavorite>
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

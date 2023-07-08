import { IGames } from "../../interfaces/IGames";
import {
  Card,
  Cards,
  DivStarFavorite,
  Favorities,
  HomeDeveloped,
  HomeGenre,
  HomeImg,
  Star,
  StarDiv,
  Title,
} from "../../pages/home/styleHome";
import heartGray from "../../assets/img/heart-gray.png";
import heartRed from "../../assets/img/heart-red.png";

interface Props {
  favorites: IGames[];
  allGames: IGames[];
  handleFavorite: (game: IGames) => void;
  handleRating: (gameId: number, rating: number) => void;
  ratings: { [id: string]: number };
}

export const Favorites: React.FC<Props> = ({
  favorites,
  allGames,
  handleFavorite,
  handleRating,
  ratings,
}) => {
  const favoriteGames = allGames.filter((game) =>
    favorites.some((favorite) => favorite.id === game.id)
  );

  return (
    <>
      <Title>Jogos Favoritos</Title>
      <Cards>
        {favoriteGames.map((game) => (
          <Card key={game.id}>
            <DivStarFavorite>
              <Favorities
                onClick={() => handleFavorite(game)}
                src={favorites ? heartRed : heartGray}
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
        ))}
      </Cards>
    </>
  );
};

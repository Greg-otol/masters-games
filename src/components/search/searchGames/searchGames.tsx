import { InputSearch, Search, SearchContainer } from "./styleSearchGames";
import { ISearchGames } from "../../../interfaces/ISearchGames";

export const SearchGames = (props: ISearchGames) => {
  return (
    <SearchContainer>
      <Search>
        <InputSearch
          type="text"
          placeholder=" Pesquisar jogo"
          value={props.value}
          onChange={props.handleSearchValue}
        />
      </Search>
    </SearchContainer>
  );
};

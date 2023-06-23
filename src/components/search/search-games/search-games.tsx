import {
  InputSearch,
  Search,
  SearchContainer,
} from "./style-search-games";
import { ISearchGames } from "../../../interfaces/ISearch-games";

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

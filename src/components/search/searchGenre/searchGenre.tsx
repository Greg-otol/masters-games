import { ContainerOption, Options, OptionSelect } from "./styleSearchGenre";
import { ISearchGenre } from "../../../interfaces/ISearchGenre";

export const GenrerSelect = (props: ISearchGenre) => {
  return (
    <ContainerOption>
      <OptionSelect onChange={props.handleSearchValue}>
        <Options value="default">Gêneros</Options>
        {props.valueMap
          .filter(
            (genre: string, index: number) =>
              props.valueMap.indexOf(genre) === index
          )
          .map((genre: string) => {
            return (
              <Options key={genre} value={genre}>
                {genre}
              </Options>
            );
          })}
      </OptionSelect>
    </ContainerOption>
  );
};

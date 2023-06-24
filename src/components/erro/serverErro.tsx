import { useNavigate } from "react-router-dom";
import { ErroButton, ErroContainer, ErroImg, ErroTitle } from "./styleErro";
import sorry from "../../assets/img/sorry.png";
import { IErro } from "../../interfaces/IErro";

export const ServerErro = (props: IErro) => {
  const navigate = useNavigate();

  return (
    <ErroContainer>
      <ErroImg src={sorry} />
      <ErroTitle>{props.value}</ErroTitle>
      <ErroButton onClick={() => navigate("/")}>
        Clique aqui para recarregar a pagina
      </ErroButton>
    </ErroContainer>
  );
};

import { auth } from "../../services/firebase";
import { HeaderImg, HeaderContainer, HeaderDiv, HeaderH1 } from "./styleHeader";
import logout from "../../assets/img/logout.png";
import login from "../../assets/img/login.png";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

export function Header() {
  const navigate = useNavigate();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLogin = () => {
    navigate("/auth");
  };

  const handleLogout = async () => {
    const auth = getAuth();
    await signOut(auth);
    navigate("/");
    window.location.reload();
  };

  return (
    <HeaderContainer>
      <HeaderDiv>
        <HeaderH1 onClick={handleScrollToTop}>App Masters Games</HeaderH1>
        {auth.currentUser ? (
          <HeaderImg
            onClick={handleLogout}
            src={logout}
            alt="Imagem de logout (Sair)"
          />
        ) : (
          <HeaderImg
            onClick={handleLogin}
            src={login}
            alt="Imagem de login (Entrar)"
          />
        )}
      </HeaderDiv>
    </HeaderContainer>
  );
}

import {
  LoginA,
  LoginButton,
  LoginContainer,
  LoginDiv,
  LoginForm,
  LoginImg,
  LoginInput,
  LoginLabel,
  LoginP,
  LoginTitle,
} from "./styleLogin";
import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../services/firebase";
import { Loading } from "../../components/loading/loading";
import logo from "../../assets/img/logo.png";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [signInWithEmailAndPassword, loading] =
    useSignInWithEmailAndPassword(auth);

  function handleSignIn(event: React.ChangeEvent<HTMLInputElement> | any) {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);

    auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/");
      } else {
        navigate("/register");
      }
    });
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <LoginContainer>
      <LoginImg src={logo} alt="Imagem da logo AppMasters" />
      <LoginTitle>Digite suas informações de login</LoginTitle>

      <LoginForm>
        <LoginLabel htmlFor="email">E-mail</LoginLabel>
        <LoginInput
          type="text"
          name="email"
          id="email"
          placeholder="Digite seu e-mail"
          onChange={(e) => setEmail(e.target.value)}
        />

        <LoginLabel htmlFor="password">Senha</LoginLabel>
        <LoginInput
          type="password"
          name="password"
          id="password"
          placeholder="Digite sua senha"
          onChange={(e) => setPassword(e.target.value)}
        />

        <LoginA href="#">Esqueceu sua senha ?</LoginA>

        <LoginButton className="button" onClick={handleSignIn}>
          Entrar
        </LoginButton>
        <LoginDiv>
          <LoginP>Você não tem uma conta?</LoginP>
          <Link to="/register">
            <LoginP>Clique aqui</LoginP>
          </Link>
        </LoginDiv>
      </LoginForm>
    </LoginContainer>
  );
}

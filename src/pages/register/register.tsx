import {
  RegisterButton,
  RegisterContainer,
  RegisterDiv,
  RegisterForm,
  RegisterInput,
  RegisterLabel,
  RegisterP,
  RegisterTitle,
} from "./styleRegister";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../services/firebase";
import { Loading } from "../../components/loading/loading";
import logo from "../../assets/img/logo.png";
import { LoginImg } from "../login/styleLogin";

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, loading] =
    useCreateUserWithEmailAndPassword(auth);

  function handleSignOut(event: React.ChangeEvent<HTMLInputElement> | any) {
    event.preventDefault();
    createUserWithEmailAndPassword(email, password);

    auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/auth");
      } else {
        return;
      }
    });
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <RegisterContainer>
      <LoginImg src={logo} alt="Imagem da logo AppMasters" />
      <RegisterTitle>Digite suas informações de cadastro</RegisterTitle>

      <RegisterForm>
        <RegisterLabel htmlFor="email">E-mail</RegisterLabel>
        <RegisterInput
          type="text"
          name="email"
          id="email"
          placeholder="Digite um e-mail"
          onChange={(e) => setEmail(e.target.value)}
        />

        <RegisterLabel htmlFor="password">Senha</RegisterLabel>
        <RegisterInput
          type="password"
          name="password"
          id="password"
          placeholder="Digite uma senha"
          onChange={(e) => setPassword(e.target.value)}
        />

        <RegisterButton onClick={handleSignOut} className="button">
          Cadastrar
        </RegisterButton>
        <RegisterDiv>
          <RegisterP>Já tem uma conta?</RegisterP>
          <Link to="/auth">
            <RegisterP>Acesse sua conta aqui</RegisterP>
          </Link>
        </RegisterDiv>
      </RegisterForm>
    </RegisterContainer>
  );
}

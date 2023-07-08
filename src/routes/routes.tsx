import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/home";
import { ServerErro } from "../components/erro/serverErro";
import { Register } from "../pages/register/register";
import { Login } from "../pages/login/login";

enum MessageErro {
  ERRO_SERVER = "O servidor fahou em responder, tente recarregar a página!",
  SERVER_NOT_RESPONSE = "O servidor não conseguirá responder por agora, tente voltar novamente mais tarde!",
  TIME_EXCEEDED = "O servidor demorou para responder, tente mais tarde!",
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/auth" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route
        path="/server-erro"
        element={<ServerErro value={MessageErro.ERRO_SERVER} />}
      />
      <Route
        path="/server-not-response"
        element={<ServerErro value={MessageErro.SERVER_NOT_RESPONSE} />}
      />
      <Route
        path="/server-time-exceeded"
        element={<ServerErro value={MessageErro.TIME_EXCEEDED} />}
      />
    </Routes>
  );
}

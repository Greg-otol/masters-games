import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/home";
import { ErroServer } from "../components/erro-page/erro-server";
import { ServerNotResponse } from "../components/erro-page/server-not-response";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/erro-servidor" element={<ErroServer />} />
      <Route path="/server-not-response" element={<ServerNotResponse />} />
    </Routes>
  );
}

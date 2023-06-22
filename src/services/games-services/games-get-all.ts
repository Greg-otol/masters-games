import { Api } from "../api/api";

export const gamesGetAll = async () => {
  const response = await Api.get("/data");

  return response;
};

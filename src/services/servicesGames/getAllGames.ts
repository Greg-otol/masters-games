import { Api } from "../api/api";

export const getAllGames = async () => {
  const response = await Api.get("/data");

  return response;
};

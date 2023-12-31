import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

export const Api = axios.create({
  baseURL,
  headers: {
    "dev-email-address": 'gregoriogrgeotavia@hotmail.com',
  },
});

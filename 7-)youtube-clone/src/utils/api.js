import axios from "axios";

const api = axios.create({
  baseURL: "https://youtube138.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "a18611c9c9msh5bfa08f1405b7ebp1189dfjsn1a97338b2630",
    "x-rapidapi-host": "youtube138.p.rapidapi.com",
  },
});

export default api;

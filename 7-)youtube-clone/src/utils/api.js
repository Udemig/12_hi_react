import axios from "axios";

const api = axios.create({
  baseURL: "https://youtube138.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "e52e3bfef4msh2b3dc66d0cfb4a8p16624ejsn1c91d9af0240",
    "x-rapidapi-host": "youtube138.p.rapidapi.com",
  },
});

export default api;

import axios from "axios";

const api = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
  headers: {
    accept: "application/json",
    "x-cg-demo-api-key": "CG-x2UWdYo3crDGPW5fmw2Qrsnw",
  },
});

export default api;

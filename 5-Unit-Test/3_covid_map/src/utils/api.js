import axios from "axios";

const totalApi = axios.create({
  baseURL: "https://covid-19-statistics.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247",
    "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
  },
});

const detailApi = axios.create({
  baseURL: "https://covid-193.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247",
    "x-rapidapi-host": "covid-193.p.rapidapi.com",
  },
});

const countryApi = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export { detailApi, totalApi, countryApi };

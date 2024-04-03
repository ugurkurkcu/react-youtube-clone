import axios from "axios";

const api = axios.create({
  baseURL: "https://yt-api.p.rapidapi.com/",
  params: {
    geo: "TR",
    lang: "tr-TR",
  },
  headers: {
    "X-RapidAPI-Key": "a01f8c9863msh4496ae4728b9bfbp1e00f2jsn1c873837ceb9",
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
});

export default api;

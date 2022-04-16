import axios from "axios";

const purpleAxios = axios.create({
  baseURL: "http://localhost:3001",
});

export default purpleAxios;

import axios from "axios";

const purpleAxios = axios.create({
  baseURL: "http://localhost:9000",
});

export default purpleAxios;

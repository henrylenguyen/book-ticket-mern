import axios from "axios";
import { TOKEN } from "constants/token";
import { BASE_URL } from "constants/token";

const requestApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    usertoken: `Bearer ${localStorage.getItem("userToken")}`
  }
})
export default requestApi;
import axios from "axios";
import { config } from "../configs/config";

export default axios.create({
  baseURL: config.baseURL,
  headers: {
    "Content-type": "application/json",
  },
});

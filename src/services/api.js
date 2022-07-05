import axios from "axios";
import { server_url } from "../configs/server";
const API = axios.create({
  baseURL: server_url,
  //baseURL: process.env.URL_SERVER,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "*",
  },
});

API.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.error(error);
    return Promise.reject(error);
  }
);

export default API;

import axios from "axios";

const http = axios.create({
  baseURL: "https://comsyssoftwapp.azurewebsites.net/api/User",
});

export class AuthApiService {
  register(body) {
    return http.post("/Signup", body);
  }

  login(body) {
    return http.post("/Login", body);
  }
}

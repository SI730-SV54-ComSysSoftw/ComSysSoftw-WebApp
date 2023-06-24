import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:5156/api",
});

export class AuthApiService {
  register(body) {
    return http.post("/user/create", body);
  }

  login(body) {
    return http.post("/user/login", body);
  }
}

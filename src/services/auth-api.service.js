import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:5156/api/User",
});

export class AuthApiService {
  register(body) {
    return http.post("/Signup", body);
  }

  login(body) {
    return http.post("/Login", body);
  }

  getUser(username) {
    return http.get(`/user/username/${username}`);
  }
}

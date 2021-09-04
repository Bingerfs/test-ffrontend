import axios from "axios";

const API_URL = " https://asobec-gitlab-staging.herokuapp.com/api/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "login", {
        username,
        password
      })
      .then(response => {
        console.log(response.data);
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
  logout() {
    localStorage.removeItem("user");
  }

  getUserRole() {
    return JSON.parse(localStorage.getItem("user")).roles[0];
  }
}

export default new AuthService();
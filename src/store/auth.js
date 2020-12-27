import axios from "axios";
import jwt_decode from "jwt-decode";

const getTokenPoint = "http://localhost:3001/api/jwt-auth/get-token";

export default {
  state: () => ({ token: "", userName: "" }),
  mutations: {
    setToken(state, token) {
      const decoded = jwt_decode(token);
      console.log("token", decoded);
      state.token = token;
      state.userName = decoded.fullName;
    },
  },
  actions: {
    async getToken(context, payload) {
      console.log("payload", payload);
      const response = await axios.post(getTokenPoint, {
        login: payload.login,
        password: payload.password,
      });
      const token = response.data.access_token;
      console.log(response);
      context.commit("setToken", token);
    },
  },
  getters: {},
};

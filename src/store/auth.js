import axios from "axios";
import jwt_decode from "jwt-decode";
import { getTokenEndPoint } from "../consts";

export default {
  state: () => ({ token: "", userName: "" }),
  mutations: {
    setToken(state, token) {
      const decoded = jwt_decode(token);
      //console.log("token", decoded);
      state.token = token;
      state.userName = decoded.fullName;
      setTokenInterceptor(token);
    },
  },
  actions: {
    async getToken(context, payload) {
      // console.log("payload", payload);
      const response = await axios.post(getTokenEndPoint, {
        login: payload.login,
        password: payload.password,
      });
      const token = response.data.access_token;
      // console.log(response);
      context.commit("setToken", token);
    },
  },
  getters: {},
};

function setTokenInterceptor(token) {
  axios.interceptors.request.use(
    function(config) {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    function(err) {
      return Promise.reject(err);
    }
  );
}

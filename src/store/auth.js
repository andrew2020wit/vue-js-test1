import axios from "axios";
import jwt_decode from "jwt-decode";
import { getTokenEndPoint } from "../consts";

let tokenInterceptor = null;

export default {
  state: () => ({ token: "", userName: "guest" }),
  mutations: {
    setToken(state, token) {
      const decoded = jwt_decode(token);
      //console.log("token", decoded);
      state.token = token;
      state.userName = decoded.fullName;
      setTokenInterceptor(token);
    },
    logOut(state) {
      state.token = "";
      state.userName = "guest";
      // setTokenInterceptor("");
      removeTokenInterceptor();
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
  removeTokenInterceptor();
  tokenInterceptor = axios.interceptors.request.use(
    function(config) {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    function(err) {
      return Promise.reject(err);
    }
  );
  console.log("tokenInterceptor", tokenInterceptor);
}

function removeTokenInterceptor() {
  if (tokenInterceptor !== null) {
    axios.interceptors.request.eject(tokenInterceptor);
    tokenInterceptor = null;
  }
}

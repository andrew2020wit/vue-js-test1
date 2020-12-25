import jwt_decode from "jwt-decode";
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
  actions: {},
  getters: {},
};

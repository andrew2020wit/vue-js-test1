<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="onSubmit">
      <input v-model="login" type="text" required autocomplete="false" /> <br />
      <input v-model="password" type="password" required autocomplete="false" />
      <br />
      <input type="submit" value="login" />
    </form>
  </div>
</template>

<script>
import { apiUrl } from "../main";
export default {
  data: function() {
    return { login: "bob", password: "12" };
  },
  methods: {
    onSubmit: async function() {
      const point = apiUrl + "/jwt-auth/get-token-obj";
      console.log(point);
      const response = await this.axios.post(point, {
        login: this.login,
        password: this.password,
      });
      console.log("response", response);
      this.$store.commit("setToken", response.data.access_token);
    },
  },
};
</script>

<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="onSubmit">
      <input v-model="login" type="text" required autocomplete="false" /> <br />
      <input v-model="password" type="password" required autocomplete="false" />
      <br />
      <input type="submit" value="login" />
    </form>
    <p>User: {{ $store.state.auth.userName }}</p>
    <pre>{{ message }}</pre>
    <p><button @click="getPrivateApi">getPrivateApi</button></p>

    <button @click="logOut">LogOut</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return { login: "bob", password: "12", message: "" };
  },
  methods: {
    onSubmit: async function() {
      this.$store.dispatch({
        type: "getToken",
        login: this.login,
        password: this.password,
      });
    },
    getPrivateApi: function() {
      this.axios
        .get("http://localhost:3001/api/jwt-auth/test-private-route")
        .then((value) => {
          this.message = value.data;
          console.log("AuthUsePrivateApi", value);
        })
        .catch((x) => {
          this.message = x;
          // console.log("catch", x);
        });
    },
    logOut: function() {
      this.$store.commit("logOut");
    },
  },
};
</script>

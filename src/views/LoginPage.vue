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
export default {
  data: function() {
    return { login: "bob", password: "12" };
  },
  methods: {
    onSubmit: async function() {
      console.log("onSubmit", this.login, this.password);

      this.$store.dispatch({
        type: "getToken",
        login: this.login,
        password: this.password,
      });
    },
  },
};
</script>

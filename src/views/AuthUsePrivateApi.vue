<template>
  <div>
    <h1>AuthUsePrivateApi</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return { message: "" };
  },
  mounted: function() {
    this.axios
      .get("http://localhost:3001/api/jwt-auth/test-private-route")
      .then((value) => {
        this.message = value.data;
        // console.log("AuthUsePrivateApi", value);
      });
  },
};
</script>

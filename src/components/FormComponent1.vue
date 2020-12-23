<template>
  <div class="container">
    <h2>Create User</h2>
    <form @submit.prevent="onSubmit">
      <input
        v-model.trim="name"
        name="name"
        placeholder="name"
        minlength="3"
        maxlength="128"
        required
      />
      <br />
      <input
        v-model.number="age"
        name="age"
        type="number"
        placeholder="age"
        min="10"
        max="100"
        required
      />
      <br />
      <input type="submit" value="Send" />
    </form>
    <p>Result:</p>
    <pre>{{ result }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return { name: "", age: null, result: null };
  },
  methods: {
    onSubmit() {
      this.result = { name: this.name, age: this.age };
      console.log("this.result: ", this.result);
    },
  },
};
</script>

<style scoped>
input {
  margin: 0.5rem;
}
</style>

<template>
  <div>
    <h1>StateMod</h1>
    <p>someStateNumber: {{ $store.state.someStateNumber }}</p>
    <button @click="increment">incrementSomeStateNumber</button>
    <button @click="disp">dispatch, after 2sec</button>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.commit("incrementSomeStateNumber");
    },
    disp() {
      this.$store.dispatch("someAction");
    },
  },
};
</script>

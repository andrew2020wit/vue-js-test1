<template>
  <div class="home">
    <h1>Home Page</h1>
    <Component1
      props1="Value of props 1"
      props2="334"
      v-on:eventType1="eventType1ToConsole($event)"
    />
  </div>
</template>

<script>
import Component1 from "../components/Component1";
export default {
  name: "Home",
  components: {
    Component1,
  },
  methods: {
    eventType1ToConsole(x) {
      console.log("Home Page: eventType1 from Component1, enent-value: ", x);
    },
  },
};
</script>

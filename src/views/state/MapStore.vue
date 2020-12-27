<template>
  <div>
    <h1>
      MapStore
    </h1>
    <p>computed localX: {{ localX }}</p>
    <p>mapState: {{ someStateNumber }}</p>
    <p>mapGetters: {{ some1000StateNumber }}</p>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    localX() {
      return 10;
    },
    ...mapState(["someStateNumber"]),
    ...mapGetters(["some1000StateNumber"]),
  },
};
</script>

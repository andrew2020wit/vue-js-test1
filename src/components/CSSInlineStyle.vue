<template>
  <div>
    <h1>Inline styles</h1>
    <p v-bind:style="{ color: color1, fontSize: sizeFont2 }">
      v-bind:style : Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Provident, ipsam?
    </p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      color1: "green",
      sizeFont2: "2rem",
    };
  },
};
</script>

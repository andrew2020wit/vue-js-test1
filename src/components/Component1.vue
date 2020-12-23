<template>
  <div>
    <h2 v-bind:title="titleValue">Component1</h2>
    <!-- props -->
    <p>props1: {{ props1 }}, props2: {{ props2 }}</p>
    <!-- dataProperty -->
    <p>dataPropertyString2: {{ dataPropertyString2 }}</p>
    <!-- v-for -->
    <h3>v-for :</h3>
    <div v-for="post in posts" v-bind:key="post.id">
      title: {{ post.title }}
    </div>
    <!-- $emit Event Enitter -->
    <h3>$emit Event Enitter</h3>
    <button @click="$emit('eventType1', 'someValue')">
      Generete event "eventType1" with "someValue"
    </button>
  </div>
</template>

<script>
export default {
  props: ["props1", "props2"],
  data: function() {
    return {
      dataPropertyNumber1: 0,
      dataPropertyNumber2: 0,
      titleValue: "someTitle",
      dataPropertyString2: "someText",
      posts: [
        { id: 1, title: "My journey with Vue" },
        { id: 2, title: "Blogging with Vue" },
        { id: 3, title: "Why Vue is so fun" },
      ],
    };
  },
};
</script>

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
    <!-- computedValue -->
    <h3>ComputedValue & method</h3>
    <input v-model.number="dataPropertyNumber1" />
    <p>computedValue: {{ computedValue }}</p>
    <!-- method1 -->
    <h3>method1</h3>
    <p>method1: {{ method1() }}</p>
  </div>
</template>

<script>
export default {
  props: ["props1", "props2"],
  data: function() {
    return {
      dataPropertyNumber1: 10,
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
  // cashed
  computed: {
    computedValue: function() {
      return this.dataPropertyNumber1 + 100;
    },
    //get and set
    computedValueWithSetter: {
      get: function() {
        return 100;
      },
      set: function(newValue) {
        console.log(
          `computedValueWithSetter: now I will do something with `,
          newValue
        );
      },
    },
  },
  methods: {
    method1: function() {
      return this.dataPropertyNumber1 + 200;
    },
  },
  // watch not recomended
  watch: {
    dataPropertyNumber1: function() {
      console.log(
        "Component1 watch dataPropertyNumber1: ",
        this.dataPropertyNumber1
      );
    },
  },
  //lifecycle
  created: function() {
    // console.log("Component1 created");
  },
  mounted: function() {
    // console.log("Component1 mounted");
  },
  destroyed: function() {
    // console.log("Component1 destroyed");
  },
};
</script>

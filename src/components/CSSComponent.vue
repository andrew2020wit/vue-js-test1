<template>
  <div>
    <h1>CSSComponent, Classes</h1>
    <table>
      <tr>
        <td><input v-model="isRed" type="checkbox" /></td>
        <td>isRed</td>
      </tr>
      <tr>
        <td><input v-model="isBold" type="checkbox" /></td>
        <td>isBold</td>
      </tr>
    </table>

    <p v-bind:class="{ 'red-style': isRed, boldStyle: isBold }">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi,
      fugiat!
    </p>
    <p v-bind:class="classObject">classObject</p>
    <p v-bind:class="['red-style', 'boldStyle']">
      Array of classes, static, []
    </p>
    <p v-bind:class="[isRed ? 'red-style' : '', 'boldStyle']">
      Array of classes, isRed is optional []
    </p>
    <p v-bind:class="[{ 'red-style': isRed }, 'boldStyle']">
      Array of classes, isRed is optional, {}/[]
    </p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      isRed: false,
      isBold: false,
      classObject: {
        "red-style": false,
        boldStyle: false,
      },
    };
  },
  watch: {
    isRed: function() {
      this.classObject["red-style"] = this.isRed;
    },
    isBold: function() {
      this.classObject.boldStyle = this.isBold;
    },
  },
};
</script>

<style scoped>
.red-style {
  color: red;
}
.boldStyle {
  font-weight: bold;
}
</style>

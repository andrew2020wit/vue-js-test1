<template class="margin: 0">
  <div class="body-div">
    <div class="layout">
      <header>VueJS Test1</header>
      <main>
        <nav>
          <Nav1 />
        </nav>
        <div class="content">
          <!-- Content -->
          <router-view />
        </div>
      </main>
      <footer>Footer</footer>
    </div>
  </div>
</template>

<script>
import Nav1 from "./router/Nav1.vue";
export default {
  components: { Nav1 },
};
</script>

<style>
.body-div {
  margin: 0;
  padding: 0;
}
.layout {
  display: flex;
  flex-direction: column;
  background-color: red;
  flex-wrap: nowrap;
  height: 100vh;
}
header {
  background-color: aqua;
  flex: 0;
  text-align: center;
}
main {
  background-color: aquamarine;
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
footer {
  background-color: aqua;
  flex: 0;
}

.content {
  flex: 1;
  background-color: burlywood;
  padding: 2rem;
}
nav {
  width: fit-content;
  flex: 0;
  background-color: aquamarine;
}
</style>

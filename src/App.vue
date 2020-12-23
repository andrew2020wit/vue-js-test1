<template class="margin: 0">
  <div class="body-div">
    <div class="layout">
      <header>VueJS Test1</header>
      <main>
        <nav>
          <!-- Menu -->
          <ul>
            <li>
              <router-link to="/"> Home</router-link>
            </li>
            <li>
              <router-link to="/about">About</router-link>
            </li>
          </ul>

          <br />
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

<style>
ul li {
  margin: 0.5rem;
  font-size: 1.5rem;
}
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
nav {
  width: fit-content;
  flex: 0;
  background-color: aquamarine;
}
.content {
  flex: 1;
  background-color: burlywood;
  padding: 2rem;
}
</style>

<template>
  <div>
    <ul>
      <li>
        <router-link to="/"> Home</router-link>
      </li>
      <li>
        <router-link to="/forms">Forms</router-link>
      </li>
      <li>
        <router-link to="/css-page">CSS</router-link>
      </li>
      <li>==State==</li>
      <li>
        <router-link to="/state-viewer">state-viewer</router-link>
      </li>
      <li>
        <router-link to="/StateMod">StateMod</router-link>
      </li>
      <li>
        <router-link to="/MapStore">MapStore</router-link>
      </li>
      <li>==Auth=</li>
      <li>
        <router-link to="/LoginPage">LoginPage</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul li {
  margin: 0.5rem;
  font-size: 1.5rem;
}
</style>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
html,
body {
  height: 100%;
  padding-top: 30px;
}

body {
  background: rgb(238, 174, 202);
  background: linear-gradient(
    312deg,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
}
html {
  font-family: "Homemade Apple", cursive;
  font-size: 2em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.quote {
  color: white;
  text-align: center;
}
</style>

<template>
  <div id="app">
    <the-header />
    <v-main-container />
    <the-footer />
  </div>
</template>

<script>
import TheFooter from './components/the-footer.vue'
import TheHeader from './components/the-header.vue'
import VMainContainer from './components/v-main-container.vue'

export default {
  components: { TheHeader, TheFooter, VMainContainer },
}
</script>

<style lang="scss">
* {
  font-family: 'Fira Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  margin: 0;
  box-sizing: border-box !important;
  outline: none !important;
}
body {
  background-color: #fff;
}
a {
  text-decoration: none;
  color: red;
}
button {
  border: none;
  appearance: none;
  outline: none;
}
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: 100%;
  --white: #ffffff;
  --black: #000000;
  --primary: #42b883;
  --secondary: #496583;
  font-family: 'Apis', sans-serif;
}
main {
  flex: 1 1 auto;
}
</style>

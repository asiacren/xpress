<template lang="pug">
  #app
    img(src="./assets/logo.png") 
    router-view
    h2 bgffgbfgb
    p 阿斯打扫打扫
    .logo
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  h2 {
    color: red;
  }
}
</style>

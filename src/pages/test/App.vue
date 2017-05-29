<template lang="pug">
  #app
    -// img(src="./assets/logo.png") 
    router-view
    router-link(to="/foo") Go to Foo
    router-link(to="/bar") Go to Bar
    h2 test
    p test
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

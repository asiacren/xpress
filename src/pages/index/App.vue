<template lang="pug">
  #app
    img(src="../../assets/logo.png") 
    router-view
    h2 bgffgbfgb
    p 阿斯打扫打扫
    .logo
    .show_img
    .show_img_a
    a(href="list.html" target="_black") alist连接
    a(href="test.html" target="_black") atest连接
    router-link(to="/foo") Go to Foo
    router-link(to="/bar") Go to Bar
    router-link(to="/foo") Go to redirect
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">

@import "../../assets/scss/common";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  p{
    color:blue;
  }
  .logo{
    width: 100%;
    height: 200px;
    background: url(../../assets/logo.png);
  }
}
</style>

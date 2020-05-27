<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/Order">Order</router-link> |
      <router-link to="/Login">Login</router-link>
    </div>
    <router-view/>
    <szh-footer></szh-footer>
  </div>
</template>

<script>
// 导入组件，然后使用
import Footer from './views/Footer'
export default {
  name: 'app',
  components: {
    'szh-footer': Footer
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

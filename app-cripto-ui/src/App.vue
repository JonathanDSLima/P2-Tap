<template>
  <div class="container">
    <Header />
    <Home />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header'
import Home from './views/Home'

export default {
  name: 'App',
  components: {
    Header,
    Home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

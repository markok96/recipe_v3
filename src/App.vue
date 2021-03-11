<template>
  <div id="app">
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
export default {
  components: {
    Footer
  }
}
</script>

<style>
  @import 'assets/styles/style.css';

  #app {
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
  /* color: #2c3e50; */
  }
</style>

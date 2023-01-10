<template>
  <div id="app">
    <randomQuote/>
  </div>
</template>

<script>
import randomQuote from './components/randomQuote.vue'

export default {
  name: 'App',
  components: {
    randomQuote
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
font-family: "Poppins", sans-serif;
}
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px;  */
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #9EA1D4;

}
</style>

<template>
  <div id="app">
    <front-state />
    <back-state />
  </div>
</template>

<script>
import FrontState from "@/components/front-state"
import BackState from "@/components/back-state"

export default {
  name: 'app',
  components: {
    FrontState,
    BackState
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

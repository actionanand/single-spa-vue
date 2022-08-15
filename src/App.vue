<template>
  <div>
  <img alt="Vue logo" src="./assets/logo.png">
  <h4>Mounted {{ name }}</h4>
  <div class="text-gray-700">
    <Options v-if="store.step == 0"></Options>
    <Quiz v-if="store.step == 1"></Quiz>
    <Restart v-if="store.step == 2"></Restart>
  </div>
  </div>
</template>

<script>
import Quiz from './components/Quiz.vue';
import Options from './components/Options.vue';
import Restart from './components/Restart.vue';
import { store } from './store';

export default {
  // name: 'App',
  components: {
    Quiz,
    Options,
    Restart,
  },
  props: ['name'],
  data() {
    return {
      store,
    };
  },
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

body {
  font-family: 'Epilogue';
  background-color: #f9f9f9;
}
input,
textarea,
button,
select,
a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
</style>

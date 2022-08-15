<template>
  <div class="quiz-wrapper">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <h4>Mounted {{ name }}</h4> -->
    <div class="text-gray-700">
      <Options v-if="store.step == 0" :title=myTitle></Options>
      <Quiz v-if="store.step == 1"></Quiz>
      <Restart v-if="store.step == 2"></Restart>
    </div>
  </div>
</template>

<script>
  import { debounceTime, take } from 'rxjs/operators';

  import { getData, state$ } from '@actionanand/utility';

  import Quiz from './components/Quiz.vue';
  import Options from './components/Options.vue';
  import Restart from './components/Restart.vue';
  import { store } from './store';


  export default {
    components: {
      Quiz,
      Options,
      Restart,
    },
    props: ['name', 'myTitle'],
    data() {
      return {
        store,
        appName: 'Single-Spa Vue - Quiz'
      };
    },
    created() {
      getData('/data').then((data) => {
          console.log('vue ', data);
        });

      this.utilSub = state$.pipe(debounceTime(0), take(1)).subscribe(async (resp) => {
        console.log('vue ', resp);
      });

      document.title = this.appName;
    },
    beforeUnmount () {
      this.utilSub.unsubscribe();
    }
  }
</script>

<style scoped>
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

  .quiz-wrapper {
    min-height: 73vh;
  }
</style>

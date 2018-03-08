import Vue from 'vue'
import App from './components/App.vue'

import store from './store'

//store.commit('INIT_JOKES', [{test_1: 'test_joke'}, {test_1: 'joke_2'}])

new Vue({
  el : '#app',
  store,
  render :h => h(App)
})

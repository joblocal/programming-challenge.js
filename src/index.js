import Vue from 'vue';

// local modules
import store from './store';
import Game from './components/Game';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(Game),
});

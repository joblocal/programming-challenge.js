import Vue from 'vue';

// module under test
import Game from 'src/components/Game';

test('matches snapshot', () => {
  const vm = new Vue(Game).$mount();
  expect(vm.$el).toMatchSnapshot();
});

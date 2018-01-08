import Vue from 'vue';

// module under test
import Board from 'src/components/Board';

test('matches snapshot', () => {
  const vm = new Vue(Board).$mount();
  expect(vm.$el).toMatchSnapshot();
});

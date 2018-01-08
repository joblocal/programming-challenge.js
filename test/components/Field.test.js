import Vue from 'vue';

// module under test
import Field from 'src/components/Field';

test('matches snapshot', () => {
  const vm = new Vue(Field).$mount();
  expect(vm.$el).toMatchSnapshot();
});

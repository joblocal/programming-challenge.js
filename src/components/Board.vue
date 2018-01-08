<template>
  <div class="Board">
    <Field
      v-for="(field, id) in fields"
      :key="id"
      :id="id"
    />
  </div>
</template>

<script>
import Field from 'src/components/Field';

export default {
  components: {
    Field,
  },

  data: () => ({
    fields: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  }),
};
</script>

<style scoped>
.Board {
  position: relative;

  width: 100%;
  height: 100%;
}
</style>

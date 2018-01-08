<template>
  <div class="Field" @click="handleClick">
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
  },

  methods: {
    handleClick() {
      console.log(`Field with id ${this.id} was clicked`);
    },
  },
};
</script>


<style scoped>
.Field {
  width: 33%;
  height: 33%;
  float: left;

  transform: scale(.95, .95);
  transition: background 0.2s ease;
  background: #333;
}

.Field:hover {
  animation: pulsate infinite .8s ease-in-out;
}

@keyframes pulsate {
  0%, 100% {
    transform: scale(.95, .95);
  } 50% {
    transform: scale(.9, .9);
  }
}
</style>

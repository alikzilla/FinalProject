<!-- ButtonGroup.vue -->

<template>
  <div class="button-group">
    <button v-for="(button, index) in buttons" :key="index" @click="handleButtonClick(button)">
      {{ button.label }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    buttons: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleButtonClick(button) {
      button.clicked = !button.clicked;
      this.$emit('button-click', button);
    },
    buttonColor(index) {
      return this.buttons[index].clicked ? 'gray' : 'white';
    },
  },
};
</script>

<style scoped>
/* Add your custom styling for the ButtonGroup component */
.button-group {
  display: flex;
}

button {
  background-color: rgb(237, 237, 237);
  color: blue;
  padding: 5px 10px;
  font-size: 17px;
  border-radius: 10px;
  cursor: pointer;
  margin-right: 10px;
  transition: 0.3s;
}

button:hover {
  color: white;
  background-color: blue;
}
</style>

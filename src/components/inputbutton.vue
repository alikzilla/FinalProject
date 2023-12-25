Button.vue

<template>
  <div>
    <button 
      @click="handleButtonClick"
      :style="buttonStyle"
    >
      {{ name }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clicked: false,
    };
  },
  methods: {
    handleButtonClick() {
      this.clicked = !this.clicked;
      setTimeout(() => {
        this.clicked = false; // Reset the clicked state
      }, 100);
    },
  },
  props: {
    name: {
      type: String,
      default: 'Button'
    },
    size: {
      type: String,
      default: 'medium',
      validator: value => ['small', 'medium', 'large'].includes(value),
    },
    hasBorder: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonStyle() {
      return {
        fontSize: this.size === 'small' ? '16px' : this.size === 'large' ? '24px' : '20px',
        border: this.hasBorder ? '1px solid black' : 'none',
        cursor: 'pointer',
        backgroundColor: 'initial',
        transition: '0.3s',
      };
    },
  },
};
</script>

<style scoped>
button:hover {
  color: blue;
}
</style>
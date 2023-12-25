<!-- InputText.vue -->

<template>
  <div>
    <div class="input-container">
      <label style="margin-left: 5px; font-size: 20px;" for="inputText">{{ label }}</label>
      <div>
        <input :type="type" name="inputText" id="inputText" v-model="inputValue" @input="handleInput"
          @keyup.enter="handleEnter" :class="{ 'error-input': errorInput }" :placeholder="placeholder"
          :style="{ width: width ? width + 'px' : 'auto' }" />
        <div class="error" :class="{ 'error-visible': errorVisible }">
          {{ errorMessage }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    width: {
      type: Number, // Assuming width is a number representing pixels
    },
  },
  data() {
    return {
      inputValue: '',
      errorMessage: 'Required.',
      errorVisible: false,
    };
  },
  methods: {
    validateInput() {
      return !!this.inputValue.trim();
    },
    handleInput() {
      this.errorVisible = this.errorInput = this.inputValue === '';
    },
    handleEnter() {
      // Emit a custom 'enter' event when the Enter key is pressed
      this.$emit('enter');
    },
  },
};
</script>
<style scoped>
.input-container {
  position: relative;
  display: flex;
  flex-direction: column;
}

input {
  padding: 10px 20px;
  font-size: 15px;
  border: none;
  border-radius: 5px;
  outline-color: rgb(150, 192, 255);
  margin-bottom: 10px;
  position: relative;
  z-index: 2;
  border-width: 2px;
  height: 50px;
}

.error {
  color: rgb(255, 47, 47);
  font-weight: bold;
  font-size: 15px;
  position: absolute;
  top: 20px;
  opacity: 0;
  transition: top 0.3s ease-out, opacity 0.3s ease-out;
  z-index: 1;
}

.error-visible {
  top: 60px;
  opacity: 1;
}

.error-input {
  transition: 0.3s;
  outline-color: rgb(255, 47, 47);
  border-color: rgb(255, 47, 47);
}
</style>

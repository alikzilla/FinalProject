<template>
  <div class="input-container">
    <div class="card" :style="{ width: size + 'px', height: height + 'px', padding: padding + 'px' }">
      <div class="flex items-center justify-center">
        <div class="flex items-center justify-center">
          <div class="flex justify-center items-center">
            <h1 class="message-text font-semibold">{{ content }}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 50
    },
    height: {
      type: Number,
      default: 50
    },
    name: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    cost: {
      type: String,
      default: ''
    },
    padding: {
      type: Number,
      default: 0
    },
  }
}
</script>

<style scoped>
.card {
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 450px;
  gap: 20px;
}

.title {
  font-size: 30px;
  font-weight: 600;
}

.content {
  font-size: 20px;
}

.dots {
  position: relative;
  right: 10px;
  top: -10px;
}

.message-text {
  background-color: rgb(230, 230, 230);
  border-radius: 20px;
  padding: 5px 15px;
}
</style>
<template>
  <div class="input-container">
    <div class="card" :style="{ width: size + 'px' }">
      <div class="title font-bold">{{ title }}</div>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-[25px] justify-start">
          <img class="rounded-[10px]" src="../assets/profile.jpg" alt="profile" width="70px">
          <div>
            <p class="font-bold">{{ name }}</p>
            <h1>{{ content }}</h1>
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
    name: {
      type: String,
      default: 'content'
    },
    content: {
      type: String,
      default: 'content1'
    },
    date: {
      type: String,
      default: ''
    },
    cost: {
      type: String,
      default: ''
    },
  }
}
</script>

<style scoped>
.card {
  background-color: white;
  padding: 30px;
  display: flex;
  flex-direction: column;
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
</style>
<template>
  <div class="input-container">
    <div class="card" :style="{ width: size + 'px', padding: padding + 'px' }">
      <div class="title">{{ title }}</div>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-[25px] justify-start">
          <img class="rounded" src="../assets/profile.jpg" alt="profile" width="50px">
          <div>
            <p>{{ name }}</p>
            <h1 class="font-bold">{{ content }}</h1>
          </div>
        </div>
        <img class="bg-gray-500 rounded-[50%] ease-linear duration-300 p-2 hover:bg-blue-500" src="../assets/call.png"
          alt="call" width="50px">
      </div>
      <div class="w-full h-[1px] border border-dashed border-gray-500"></div>
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-[20px]">
          <div class="flex items-center gap-[10px]">
            <img src="../assets/time.png" alt="time" width="20px">
            <h1 class="text-[20px] font-semibold">{{ date }}</h1>
          </div>
          <div class="flex items-center gap-[7px]">
            <img src="../assets/cost.png" alt="time" width="20px">
            <h1 class="text-[20px] font-semibold">{{ cost }}</h1>
          </div>
        </div>
        <h1 class="dots text-[30px] font-semibold">...</h1>
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
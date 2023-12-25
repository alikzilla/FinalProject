<template>
  <div class="input-container">
    <div class="card" :style="{ width: size + 'px' }">
      <div class="title">{{ title }}</div>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-[25px] justify-start">
          <div>
            <a class="text-blue-500 text-[20px]">{{ name }}</a>
            <h1 class="font-semibold text-[25px]">{{ content }}</h1>
          </div>
        </div>
        <h1 class="dots text-[30px] font-semibold">...</h1>
      </div>
      <div class="flex">
        <GroupButton :buttons="groupButtons" @button-click="handleGroupButtonClick"></GroupButton>
      </div>
      <!-- <div class="w-full h-[1px] border border-dashed border-gray-500"></div> -->
    </div>
  </div>
</template>

<script>
import GroupButton from './GroupButton.vue'

export default {
  components: {
    GroupButton
  },
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
  },
  data() {
    return {
      groupButtons: [
        { label: 'Details', clicked: false },
        { label: 'Contact patient', clicked: false },
        { label: 'Achive', clicked: false }
      ],
    }
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
  height: 265px;
  gap: 20px;
}

.title {
  font-size: 30px;
  font-weight: 600;
}

.content {
  font-size: 40px;
}

.dots {
  position: relative;
  right: 10px;
  top: -10px;
}
</style>
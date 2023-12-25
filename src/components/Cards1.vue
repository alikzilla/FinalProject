<template>
  <div class="Cards flex flex-col justify-center items-center">
    <Card1 title="Recent Questions" name="Corey Aguliar" content="Kidney function test"></Card1>
    <div class="w-[90%] h-[1px] border border-dashed border-gray-500"></div>
    <Card1 title="" name="Corey Aguliar" content="Kidney function test"></Card1>
  </div>
</template>

<script>
import Card1 from './Card1.vue'

export default {
  components: {
    Card1,
  },
}
</script>

<style scoped>
.Cards {
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}
</style>  
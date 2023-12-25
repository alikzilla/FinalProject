<template>
  <div class="Cards flex flex-col justify-center items-center gap-[4.3px]">
    <h1 class="my-6 mr-[250px] text-[20px] font-semibold">Doctors rating</h1>

    <GroupButton class="mb-6" :buttons="groupButtons" @button-click="handleGroupButtonClick"></GroupButton>

    <div class="w-full h-[1px] border border-dashed border-gray-200"></div>
    <MessengeProfile class="my-[10px]" title="" name="Corey Aguliar" content="Kidney function test"></MessengeProfile>
    <div class="w-full h-[1px] border border-dashed border-gray-200"></div>
    <MessengeProfile class="my-[10px]" title="" name="Corey Aguliar" content="Kidney function test"></MessengeProfile>
    <div class="w-full h-[1px] border border-dashed border-gray-200"></div>
    <MessengeProfile class="my-[10px]" title="" name="Corey Aguliar" content="Kidney function test"></MessengeProfile>
    <div class="w-full h-[1px] border border-dashed border-gray-200"></div>
    <MessengeProfile class="my-[10px]" title="" name="Corey Aguliar" content="Kidney function test"></MessengeProfile>
    <div class="w-full h-[1px] border border-dashed border-gray-200"></div>
    <MessengeProfile class="my-[10px]" title="" name="Corey Aguliar" content="Kidney function test"></MessengeProfile>
    <div class="w-full h-[1px] border border-dashed border-gray-200"></div>
    <MessengeProfile class="my-[10px]" title="" name="Corey Aguliar" content="Kidney function test"></MessengeProfile>
    <div class="w-full h-[1px] border border-dashed border-gray-200"></div>
  </div>
</template>

<script>
import GroupButton from './GroupButton.vue';
import MessengeProfile from './MessengeProfile.vue';

export default {
  components: {
    MessengeProfile,
    GroupButton
  },
  data() {
    return {
      groupButtons: [
        { label: 'Year', clicked: false },
        { label: 'Month', clicked: false },
        { label: 'Week', clicked: false }
      ],
    }
  }
}
</script>

<style scoped>
.Cards {
  background-color: white;
  border-radius: 10px;
  padding: 0 20px 20px 20px;
}
</style>  
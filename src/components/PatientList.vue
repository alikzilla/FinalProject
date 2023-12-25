<template>
  <div class="Cards flex flex-col justify-center items-center gap-[15px]">
    <h1 class="mt-6 mr-[250px] text-[20px] font-semibold">Recent Talks</h1>
    <div class="w-full flex justify-between">
      <GroupButton></GroupButton>
    </div>
    <div class="w-full h-[1px] border border-solid border-gray-200"></div>
    <MessengeProfile class="rounded hover:bg-gray-100" title="" name="Corey Aguliar" content="Kidney function test">
    </MessengeProfile>
    <MessengeProfile class="rounded hover:bg-gray-100" title="" name="Corey Aguliar" content="Kidney function test">
    </MessengeProfile>
    <MessengeProfile class="rounded hover:bg-gray-100" title="" name="Corey Aguliar" content="Kidney function test">
    </MessengeProfile>
    <MessengeProfile class="rounded hover:bg-gray-100" title="" name="Corey Aguliar" content="Kidney function test">
    </MessengeProfile>
    <MessengeProfile class="rounded hover:bg-gray-100" title="" name="Corey Aguliar" content="Kidney function test">
    </MessengeProfile>
    <MessengeProfile class="rounded hover:bg-gray-100" title="" name="Corey Aguliar" content="Kidney function test">
    </MessengeProfile>
    <div class="w-full h-[1px] border border-solid border-gray-200"></div>
    <InputText class="mt-[20px]" placeholder="Search Patient" width="430"></InputText>
  </div>
</template>

<script>
import GroupButton from './GroupButton.vue';
import MessengeProfile from './MessengeProfile.vue';
import InputText from './InputText.vue';

export default {
  components: {
    MessengeProfile,
    GroupButton,
    InputText
  },
}
</script>

<style scoped>
.Cards {
  background-color: white;
  border-radius: 10px;
  padding: 0 20px 20px 20px;
}
</style>  
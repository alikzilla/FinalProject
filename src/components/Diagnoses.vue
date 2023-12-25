<template>
  <div class="Cards flex flex-col items-center p-7">
    <h1 class="text-[30px] font-semibold mr-[80px] mb-[20px]">Confirmed Diagnoses</h1>
    <div class="flex mb-[10px]">
      <GroupButton :buttons="groupButtons" @button-click="handleGroupButtonClick"></GroupButton>
    </div>
    <div class="w-full h-full flex flex-col justify-between">

      <div class="w-full flex flex-col gap-[10px]">
        <div class="w-full flex justify-between">
          <h1><span class="font-bold">648</span> of <span class="font-bold">751</span></h1>
          <h1>Cold</h1>
        </div>
        <ProgressBar :progress="86" size="10" type="rgb(255,113,91)"></ProgressBar>
      </div>

      <div class="w-full flex flex-col gap-[10px]">
        <div class="w-full flex justify-between">
          <h1><span class="font-bold">215</span> of <span class="font-bold">651</span></h1>
          <h1>Fracture</h1>
        </div>
        <ProgressBar :progress="38" size="10" type="rgb(126,211,33)"></ProgressBar>
      </div>

      <div class="w-full flex flex-col gap-[10px]">
        <div class="w-full flex justify-between">
          <h1><span class="font-bold">84</span> of <span class="font-bold">120</span></h1>
          <h1>Concussion</h1>
        </div>
        <ProgressBar :progress="70" size="10" type="rgb(25,118,210)"></ProgressBar>
      </div>

      <div class="w-full flex flex-col gap-[10px]">
        <div class="w-full flex justify-between">
          <h1><span class="font-bold">804</span> of <span class="font-bold">846</span></h1>
          <h1>Hepatitis</h1>
        </div>
        <ProgressBar :progress="95" size="10" type="rgb(102,101,221)"></ProgressBar>
      </div>

      <div class="w-full flex flex-col gap-[10px]">
        <div class="w-full flex justify-between">
          <h1><span class="font-bold">458</span> of <span class="font-bold">901</span></h1>
          <h1>Dermatitis</h1>
        </div>
        <ProgressBar :progress="50" size="10" type="rgb(41,231,205)"></ProgressBar>
      </div>

    </div>
  </div>
</template>

<script>
import ProgressBar from '../components/ProgressBar.vue';
import GroupButton from './GroupButton.vue';

export default {
  components: {
    ProgressBar,
    GroupButton
  },
  data() {
    return {
      groupButtons: [
        { label: 'Years', clicked: false },
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
  display: flex;
  flex-direction: column;
  width: 450px;
}
</style>  
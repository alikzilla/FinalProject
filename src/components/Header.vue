<template>
  <header class="flex justify-between items-center">
    <div>
      <InputText placeholder="Search patients or doctors" width="600"></InputText>
    </div>
    <div>
      <div class="flex gap-[20px] items-center mr-10">
        <img class="bg-gray-600 p-3 rounded-[7px] ease-linear duration-300 hover:bg-blue-600" src="../assets/bell.png"
          alt="micro" width="50px">
        <img class="rounded" src="../assets/profile.jpg" alt="" width="50px">
        <div class="text-[20px] font-semibold flex flex-col">
          <span>Sallie McBride</span>
          <span class="text-[15px] font-normal">SURGEON</span>
        </div>
        <InputDropdownButton :name="dashboardTitle" :dropdownItems="dashboardItems"></InputDropdownButton>
      </div>
    </div>
  </header>
</template>

<script>
import InputText from './InputText.vue';
import InputDropdownButton from './InputDropdownButton.vue'

export default {
  components: {
    InputText,
    InputDropdownButton
  },
  data() {
    return {
      dashboardTitle: '🔽',
      dashboardItems: [
        { text: 'Change user', link: '/' },
        { text: 'Log out', link: '/' },
      ]
    }
  }
}
</script>

<style scoped></style>
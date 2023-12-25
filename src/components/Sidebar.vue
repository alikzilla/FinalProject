<template>
  <aside class="page-sidebar">
    <div class="sidebar">

      <SidebarHeader class="mx-[20px]"></SidebarHeader>

      <div class="Emergency flex gap-[10px] items-center">
        <img class="bg-gray-600 p-3 rounded-[7px] ease-linear duration-300 hover:bg-blue-600" src="../assets/micro.png"
          alt="micro" width="50px">
        <div class="text-[20px] font-semibold">
          Emergency
        </div>
      </div>


      <div class="flex gap-[10px] items-start justify-center">
        <img src="../assets/dashboard.png" alt="" width="20px">
        <SidebarCollapsible :title="dashboardTitle" :items="dashboardItems"></SidebarCollapsible>
      </div>

      <div class="flex gap-[10px] items-start">
        <img src="../assets/calendar.png" alt="" width="20px">
        <RouterLink to="/">
          <InputButton name="Appointments"></InputButton>
        </RouterLink>
      </div>

      <div class="flex gap-[10px] items-start">
        <img src="../assets/people.png" alt="" width="20px">
        <RouterLink to="/">
          <InputButton name="Patients"></InputButton>
        </RouterLink>
      </div>

      <div class="flex gap-[10px] items-start">
        <img src="../assets/doctor.png" alt="" width="20px">
        <RouterLink to="/">
          <InputButton name="Doctors"></InputButton>
        </RouterLink>
      </div>

      <div class="flex gap-[10px] items-start">
        <img src="../assets/message.png" alt="" width="20px">
        <SidebarCollapsible :title="dashboardTitle1" :items="dashboardItems1"></SidebarCollapsible>
      </div>

      <div class="flex gap-[10px] items-start">
        <img src="../assets/star.png" alt="" width="20px">
        <RouterLink to="/">
          <InputButton name="Rewievs"></InputButton>
        </RouterLink>
      </div>

      <div class="flex gap-[10px] items-start">
        <img src="../assets/wallet.png" alt="" width="20px">
        <RouterLink to="/">
          <InputButton name="Finances"></InputButton>
        </RouterLink>
      </div>
    </div>
  </aside>
</template>

<script>
import SidebarCollapsible from './sidebar/SidebarCollapsible.vue'
import SidebarHeader from './sidebar/SidebarHeader.vue'
import InputButton from './inputbutton.vue';

export default {
  components: {
    SidebarCollapsible,
    SidebarHeader,
    InputButton
  },
  data() {
    return {
      dashboardTitle: 'Dashboard',
      dashboardItems: [
        { text: 'Dashboard A', link: '/dashboard_a' },
        { text: 'Dashboard G', link: '/dashboard_g' },
        { text: 'Dashboard K', link: '/dashboard_k' },
        // Add more dashboard items as needed
      ],
      dashboardTitle1: 'Messenger',
      dashboardItems1: [
        { text: 'Doctors', link: '/messengerDoctor' },
        { text: 'Patients', link: '/messengerPatient' },
        // Add more dashboard items as needed
      ],
      isHovered: false,
    };
  },
};
</script>

<style scoped>
.page-sidebar {
  background-color: rgb(241, 245, 248);
  padding: 20px;
  box-shadow: 0 8px 5px rgba(0, 0, 0, 0.1);
}

.sidebar {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  padding: 40px;
}

.Emergency {
  position: relative;
  left: -19px;
}
</style>

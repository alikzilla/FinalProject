<template>
  <div class="h-[125vh]" @scroll="updateProgressBar">
    <ProgressBar class="progress-bar" :progress="progress" size="5"></ProgressBar>
    <main class="w-[100vw] h-full flex">
      <Sidebar class="sidebar w-[330px] h-full"></Sidebar>
      <section class="w-full h-full py-[50px] px-[50px] flex flex-col gap-[30px] ml-[330px]">
        <Header></Header>
        <h1 class="text-[30px] font-semibold">Messages</h1>
        <div class="flex gap-[30px] w-full">
          <div>
            <DoctorList></DoctorList>
          </div>
          <div class="flex flex-col gap-[30px] w-full">
            <MessengeCard :size="950" :height="850" :padding="30" content="Select a chat to start Messaging">
            </MessengeCard>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import ProgressBar from '../../../../FinalProject/UiLibrary/src/components/Content/ProgressBar.vue';
import Sidebar from '../components/Sidebar.vue';
import Header from '../components/Header.vue';
import DashedLineChart from '../components/DashedLineChart.vue';
import LineChart2 from '../components/LineChart2.vue';
import DoctorList from '../components/DoctorList.vue';
import MessengeCard from '../components/MessengeCard.vue';

export default {
  components: {
    ProgressBar,
    Sidebar,
    Header,
    DashedLineChart,
    LineChart2,
    DoctorList,
    MessengeCard
  },
  data() {
    return {
      progress: 0,
      styleOptions: {
        width: "100%",
        height: "500px"
      }
    }
  },
  methods: {
    updateProgressBar() {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      this.progress = (scrollPosition / totalHeight) * 100;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateProgressBar);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.updateProgressBar);
  },
};
</script>

<style scoped>
.progress-bar {
  position: fixed;
  top: 0;
  z-index: 10;
}

.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9;
}
</style>

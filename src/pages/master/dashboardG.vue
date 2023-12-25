<template>
  <div class="h-[140vh]" @scroll="updateProgressBar">
    <ProgressBar class="progress-bar" :progress="progress" size="5"></ProgressBar>
    <main class="w-[100vw] h-full flex">
      <Sidebar class="sidebar w-[330px] h-full"></Sidebar>
      <section class="w-full h-full py-[50px] px-[50px] flex flex-col gap-[30px] ml-[330px]">
        <Header></Header>
        <h1 class="text-[30px] font-semibold">Dashboard</h1>
        <div class="flex gap-[30px] w-full">
          <div>
            <Doctors></Doctors>
          </div>
          <div class="flex flex-col gap-[30px] w-full">
            <LineChart2 :styles="styleOptions"></LineChart2>
            <DashedLineChart :styles="styleOptions"></DashedLineChart>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import ProgressBar from '../../../../../FinalProject/UiLibrary/src/components/Content/ProgressBar.vue';
import Sidebar from '../../components/Sidebar.vue';
import Header from '../../components/Header.vue';
import DashedLineChart from '../../components/DashedLineChart.vue';
import LineChart2 from '../../components/LineChart2.vue';
import Doctor from '../../components/Doctor.vue';
import Doctors from '../../components/Doctors.vue';

export default {
  components: {
    ProgressBar,
    Sidebar,
    Header,
    DashedLineChart,
    LineChart2,
    Doctor,
    Doctors
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

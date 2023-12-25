<template>
  <div class="h-[160vh]" @scroll="updateProgressBar">
    <ProgressBar class="progress-bar" :progress="progress" size="5"></ProgressBar>
    <main class="w-[100vw] h-full flex">
      <Sidebar class="sidebar w-[330px] h-full"></Sidebar>
      <section class="w-full h-full py-[50px] px-[50px] flex flex-col gap-[30px] ml-[330px]">
        <Header></Header>
        <h1 class="text-[30px] font-semibold">Basic Doctor Dashboard</h1>
        <div class="flex flex flex-start gap-[30px]">
          <div class="flex flex-col gap-[30px]">
            <div class="flex gap-[30px]">
              <Card padding="30" title="Next Patients" name="Corey Aguliar" content="Kidney function test" date="09:00"
                cost="1">
              </Card>
              <Card1 title="Laborotory Tests" name="Corey Aguliar" content="Kidney function test"></Card1>
            </div>
            <div class="flex gap-[30px]">
              <ColumnChart :styles="styleOptions"></ColumnChart>
              <LineChart :styles="styleOptions"></LineChart>
            </div>
            <div class="flex gap-[30px]">
              <Cards1></Cards1>
              <Diagnoses></Diagnoses>
            </div>
          </div>
          <div>
            <Cards></Cards>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import ProgressBar from '../../components/progressbar.vue';
import Sidebar from '../../components/Sidebar.vue';
import Header from '../../components/Header.vue';
import Card from '../../components/Card.vue';
import Card1 from '../../components/Card1.vue';
import Cards from '../../components/Cards.vue';
import Cards1 from '../../components/Cards1.vue';
import LineChart from '../../components/LineChart.vue'
import ColumnChart from '../../components/ColumnChart.vue';
import Diagnoses from '../../components/Diagnoses.vue';

export default {
  components: {
    ProgressBar,
    Sidebar,
    Header,
    Card,
    Card1,
    Cards,
    Cards1,
    LineChart,
    ColumnChart,
    Diagnoses
  },
  data() {
    return {
      progress: 0,
      styleOptions: {
        width: "450px",
        height: "265px"
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

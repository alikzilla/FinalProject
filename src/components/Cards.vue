<template>
  <div class="Cards flex flex-col justify-center items-center gap-[21.5px]">
    <h1 class="text-[30px] font-semibold mr-[100px]">Upgoing Appointments</h1>
    <Pagination :currentPage="currentPage" :totalPages="totalPages" @page-change="handlePageChange"> </Pagination>
    <Card name="Clyde Morales" content="USG + Consulation" date="21:45" cost="29.90"></Card>
    <Card name="Max Morales" content="USG + Consulation" date="20:47" cost="19.15"></Card>
    <Card name="Leila Doe" content="USG" date="22:47" cost="20.15"></Card>
    <Card name="Karolina Joseph" content="USG" date="23:43" cost="19.15"></Card>
    <Card name="Linckoln Doe" content="USG" date="23:50" cost="12.15"></Card>
  </div>
</template>

<script>
import Card from './Card.vue'
import Pagination from './Pagination.vue';

export default {
  components: {
    Card,
    Pagination
  },
  data() {
    return {
      currentPage: 1,
      totalPages: 10,
    }
  },
  methods: {
    handlePageChange(page) {
      // Handle page change, e.g., fetch data for the new page
      console.log('Page changed to:', page);
      this.currentPage = page;
    },
  }
}
</script>

<style scoped>
.Cards {
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 30px;
}
</style>  
<template>
  <div class="Header-sidebar" @mouseenter="handleHeaderHover" @mouseleave="handleHeaderLeave">
    <img v-show="isHovered" src="../../assets/logo.png" alt="Logo" width="52px">
    <img v-show="!isHovered" src="../../assets/logo.png" alt="Logo" width="50px">
    <h1 class="logo">med<span>ux</span></h1>
  </div>
</template>
  
<script setup>
import { ref } from 'vue';

const isHovered = ref(false);

const handleHeaderHover = () => {
  isHovered.value = true;
};

const handleHeaderLeave = () => {
  isHovered.value = false;
};
</script>
  
<style scoped>
.Header-sidebar {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 40px;
}

.Header-sidebar img {
  position: absolute;
  left: 60px;
  transition: 0.3s;
}

.logo {
  font-size: 40px;
  font-weight: 700;
  color: rgb(65, 77, 85);
}

.logo span {
  color: rgb(38, 98, 240);
}
</style>
  
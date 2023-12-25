<template>
    <div>
      <div @click="toggleCollapse" class="collapsible-header cursor-pointer flex gap-[10px]">
        <span>{{ title }}</span>
      </div>
      <div v-show="!isCollapsed" class="collapsible-items">
        <router-link v-for="(item, index) in items" :key="index" :to="item.link" class="collapsible-item">
          <span class="collapsible-icon">{{ item.icon }}</span>
          {{ item.text }}
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  import Icon from '../../../../../FinalProject/UiLibrary/src/components/Content/Icon.vue'

  export default {
    components:{
      Icon
    },
    props: {
      title: String,
      items: Array,
    },
    data() {
      return {
        isCollapsed: true,
      };
    },
    methods: {
      toggleCollapse() {
        this.isCollapsed = !this.isCollapsed;
      },
    },
  };
  </script>
  
  <style scoped>
  
  .collapsible-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: initial;
    color: black;
    cursor: pointer;
    font-size: 20px;
    line-height: 20px;
  }
  
  .collapsible-items {
    display: flex;
    flex-direction: column;
  }
  
  .collapsible-item {
    display: flex;
    align-items: center;
    color: #4b5563;
    text-decoration: none;
    transition: color 0.3s;
    font-size: 17px;
    margin-top: 10px;
  }
  
  .collapsible-item:hover {
    color: blue;
  }
  </style>
  
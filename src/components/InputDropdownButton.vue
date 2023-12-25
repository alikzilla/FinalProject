<template>
  <div class="dropdown" @click.stop>
    <button class="dropbtn" @click="toggleDropdown" ref="dropdownButton">{{ name }}</button>
    <div v-if="isOpen" class="dropdown-content" ref="dropdownContent">
      <a v-for="(item, index) in dropdownItems" :key="index" @click="handleDropdownItemClick(item)">
        {{ item.text }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        document.addEventListener('click', this.handleDocumentClick);
      } else {
        document.removeEventListener('click', this.handleDocumentClick);
      }
    },
    handleDropdownItemClick(item) {
      alert(`Dropdown Item ${item.value} clicked!`);
      this.toggleDropdown();
    },
    handleDocumentClick(event) {
      const button = this.$refs.dropdownButton;
      const content = this.$refs.dropdownContent;

      // Close the dropdown only if the clicked element is not the button or the dropdown content
      if (!button.contains(event.target) && !content.contains(event.target)) {
        this.isOpen = false;
        document.removeEventListener('click', this.handleDocumentClick);
      }
    },
  },
  props: {
    name: {
      type: String,
      default: 'Dropdown',
    },
    dropdownItems: {
      type: Array,
      default: () => [
        { text: 'Item 1', value: 1 },
        { text: 'Item 2', value: 2 },
        { text: 'Item 3', value: 3 },
      ],
    },
  },
};
</script>

  <style scoped>
  .dropdown {
    position: relative;
  }

  .dropbtn {
    font-size: 20px;
    cursor: pointer;
    transition: 0.3s;
  }

  .dropbtn:hover{
    color: blue;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    top: 50px; /* Position dropdown below the button */
    right: 0; /* Align with the left edge of the button */
    min-width: 160px;
    z-index: 10;
    background-color: white;
    border-radius: 5px;
  }

  .dropdown-content a {
    padding: 12px 16px;
    display: block;
    cursor: pointer;
  }

  .dropdown-content a:hover {
    color: blue;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }
  </style>

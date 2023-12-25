<!-- App.vue -->
<script>
export default {
  data() {
    return {
      chart: null,
      options: {
        animationEnabled: true,
        title: {
          text: "Overall Appointment"
        },
        data: [{
          type: "column",
          dataPoints: [
            { label: "08:00", y: 10 },
            { label: "10:00", y: 15 },
            { label: "12:00", y: 25 },
            { label: "14:00", y: 30 },
            { label: "18:00", y: 28 }
          ]
        }]
      }
    }
  }
}
</script>
<template>
  <CanvasJSChart :options="options" />
</template>
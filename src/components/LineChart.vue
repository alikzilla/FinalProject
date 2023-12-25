/* App.vue */
<script>
import * as CanvasJS from '@canvasjs/charts';
export default {
  data() {
    return {
      options: {
        theme: "light2",
        exportEnabled: true,
        title: {
          text: "Patient pace"
        },
        axisY: {
          title: "Fertitlity Rate"
        },
        toolTip: {
          shared: true
        },
        legend: {
          cursor: "pointer",
          itemclick: function (e) {
            if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
              e.dataSeries.visible = false;
            } else {
              e.dataSeries.visible = true;
            }
            e.chart.render();
          }
        },
        data: [{
          type: "line",
          name: "RETURNED PATIENTs",
          showInLegend: true,
          color: "rgb(126,211,33)",
          dataPoints: [
            { label: "", y: 1.47 },
            { label: "", y: 1.5 },
            { label: "", y: 1.6 },
            { label: "", y: 1.57 },
            { label: "", y: 1.57 },
            { label: "", y: 1.54 }
          ]
        }, {
          type: "line",
          name: "NEW PATIENTS",
          showInLegend: true,
          color: "rgb(52,209,191)",
          dataPoints: [
            { label: "", y: 1.81 },
            { label: "", y: 1.80 },
            { label: "", y: 1.79 },
            { label: "", y: 1.74 },
            { label: "", y: 1.68 },
            { label: "", y: 1.65 }
          ]
        }]
      },
      styleOptions: {
        width: "100%",
        height: "360px"
      }
    }
  }
}
</script>
<template>
  <CanvasJSChart class="rounded" :options="options" :styles="styleOptions" />
</template> 
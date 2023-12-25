/* App.vue */
<script>

export default {
  data() {
    return {
      options: {
        theme: "light2",
        animationEnabled: true,
        title: {
          text: "Cure Rate"
        },
        axisX: {
          valueFormatString: "."
        },
        toolTip: {
          shared: false
        },
        legend: {
          cursor: "pointer",
          itemclick: this.toggleDataSeries
        },
        data: [{
          type: "splineArea",
          name: "Sick",
          showInLegend: true,
          color: "red",
          dataPoints: [
            { x: 1651343400000, y: 1100 },
            { x: 1651429800000, y: 700 },
            { x: 1651516200000, y: 943 },
            { x: 1651602600000, y: 658 },
            { x: 1651689000000, y: 734 },
            { x: 1651775400000, y: 963 },
            { x: 1651948200000, y: 847 },
            { x: 1652034600000, y: 1500 },
            { x: 1652121000000, y: 869 },
            { x: 1652207400000, y: 710 },
            { x: 1652293800000, y: 970 },
            { x: 1652380200000, y: 1050 },
            { x: 1652466600000, y: 1300 },
            { x: 1652553000000, y: 1400 }
          ]
        }, {
          type: "splineArea",
          name: "Cure",
          showInLegend: true,
          color: "rgb(41,231,205)",
          dataPoints: [
            { x: 1651343400000, y: 700 },
            { x: 1651429800000, y: 560 },
            { x: 1651516200000, y: 540 },
            { x: 1651602600000, y: 400 },
            { x: 1651689000000, y: 544 },
            { x: 1651775400000, y: 693 },
            { x: 1651948200000, y: 657 },
            { x: 1652034600000, y: 1330 },
            { x: 1652121000000, y: 639 },
            { x: 1652207400000, y: 506 },
            { x: 1652293800000, y: 660 },
            { x: 1652380200000, y: 906 },
            { x: 1652466600000, y: 900 },
            { x: 1652553000000, y: 1001 }
          ]
        }]
      },
      styleOptions: {
        width: "100%",
        height: "360px"
      }
    }
  },
  methods: {
    toggleDataSeries(e) {
      if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
        e.dataSeries.visible = false;
      }
      else {
        e.dataSeries.visible = true;
      }
      e.chart.render();
    }
  }
}
</script>
<template>
  <CanvasJSChart :options="options" :styles="styleOptions" />
</template>
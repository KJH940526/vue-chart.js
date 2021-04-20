<template lang="">
    <div>
        <chart :chart-data="datacollection" :options="chartOptions"></chart>
    </div>
</template>
<script>
 import Chart from "./Chart.js";

export default {
    components: {
        Chart
    },
    data() {
        return {
          datacollection: null,
          chartOptions: {
                legend: {
                    display: false
                },
           },
        };
      },
      mounted() {
        this.fillData();
      },
      methods: {
        fillData() {
          this.datacollection = {
            labels: [
              "1월",
              "2월",
              "3월",
              "4월",
              "5월",
              "6월",
              "7월",
              "8월",
              "9월",
              "10월",
              "11월",
              "12월"
            ],
            datasets: [
              {
                label: "리포트 통계",
                backgroundColor: "#62B9FB",
                data: [70, 20, 12, 39, 100, 40, 95, 80, 80, 20, 12, 101]
              }
            ]
          }
        },
      }
    };
</script>
<style lang="">
    
</style>
import {
    Bar,
    mixins
} from 'vue-chartjs'

export default {
    extends: Bar,
    mixins: [mixins.reactiveProp],
    props: ['chartData', 'options'],
    data() {
        return {
            options: { //Chart.js options
                // scales: {
                //     yAxes: [{
                //         ticks: {
                //             beginAtZero: true
                //         },
                //         gridLines: {
                //             display: true
                //         }
                //     }],
                //     xAxes: [{
                //         gridLines: {
                //             display: false
                //         }
                //     }]
                // },
                legend: {
                    display: false
                  },
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
    mounted() {
        this.renderChart(this.chartdata, this.options)
    }

}
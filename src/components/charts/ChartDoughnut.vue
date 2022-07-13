<template>
  <div>
    <Doughnut
      :chart-options="chartOptions"
      :chart-data="chartData"
      :width="width"
      :height="height"
    />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Doughnut } from "vue-chartjs/legacy";
import { ChartDataType } from "@/types";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

@Component({
  components: { Doughnut },
})
export default class ChartDoughnut extends Vue {
  @Prop()
  data!: Array<ChartDataType>;
  chartData = {
    labels: this.data[0].lables,
    datasets: [
      {
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(54, 162, 235)",
          "rgba(255, 206, 86)",
          "rgba(75, 192, 192)",
          "rgba(153, 102, 255)",
          "rgba(255, 159, 64)",
        ],
        data: this.data[0].data,
      },
    ],
  };

  width = 400;
  height = 400;

  chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };
}
</script>

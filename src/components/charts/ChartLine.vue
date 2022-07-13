<template>
  <div>
    <LineChartGenerator
      :chart-options="chartOptions"
      :chart-data="chartData"
      :width="width"
      :height="height"
    />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Line as LineChartGenerator } from "vue-chartjs/legacy";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
);
@Component({
  components: { LineChartGenerator },
})
export default class ChartLine extends Vue {
  @Prop()
  msg!: string;
  chartData = {
    labels: ["January", "February", "March"],
    datasets: [
      {
        label: "Data One",
        backgroundColor: "#f87979",
        data: [40, 39, 10, 40],
      },
      {
        label: "Data 2",
        backgroundColor: "red",
        data: [80, 69, 70, 40],
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

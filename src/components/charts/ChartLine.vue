<template>
  <div class="chart">
    <LineChartGenerator
      :chart-options="chartOptions"
      :chart-data="chartData"
      :width="width"
      :height="height"
    />

    <h2>claims/month</h2>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Line as LineChartGenerator } from "vue-chartjs/legacy";
import { ChartDataType } from "@/types";
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
  chartDatas!: ChartDataType;
  chartData = {
    labels: this.chartDatas.labels,
    datasets: this.chartDatas.data,
  };
  width = 400;
  height = 400;
  chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };
}
</script>

<style scoped>
.chart h2 {
  text-align: center;
}
</style>

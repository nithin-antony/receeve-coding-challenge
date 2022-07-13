<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <div class="card-statics">
      <div
        v-for="data in getDashboard.cardData"
        :key="data.title"
        class="table_row"
      >
        <Card
          :cardTitle="data.title"
          :totalAmount="data.totalAmount"
          :totalClaims="data.totalClaims"
          :upTrend="data.upTrend"
        />
      </div>
    </div>
    <div class="info-bar-area">
      <h2 class="info-bar-title">
        Claim statics
      </h2>
      <div class="chart-area-2">
        <ChartDoughnut :chartDatas="getDashboard.chartData.doughnutChart" />
        <ChartLine />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import Card from "../components/Card.vue";
import ChartDoughnut from "../components/charts/ChartDoughnut.vue";
import ChartLine from "../components/charts/ChartLine.vue";

@Component({
  components: { Card, ChartDoughnut, ChartLine },
})
export default class Dashboard extends Vue {
  @Getter getDashboard!: any;
  @Action fethDashoardData!: () => void;

  mounted(): void {
    this.fethDashoardData();
  }
}
</script>

<style scoped>
.dashboard {
  background-color: #ffffff;
}
.dashboard .card-statics {
  height: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  background-color: rgb(15, 23, 36);
  border-radius: 16px;
}

.dashboard .card-statics:hover {
  background-color: rgb(17, 28, 46);
}

.info-bar-area {
  margin: 20px 0;
  padding: 20px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgb(17, 28, 46);
}

.info-bar-area .chart-area-2 {
  display: flex;
  justify-content: space-around;
}
.info-bar-title {
  color: #7a7a7a;
  margin: 0;
}
</style>

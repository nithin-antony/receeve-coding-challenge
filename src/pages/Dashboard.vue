<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <div class="card-statics">
      <Card />
      <Card />
      <Card />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";
import Card from "../components/Card.vue";
import ChartDoughnut from "../components/charts/ChartDoughnut.vue";
import { AccountType } from "@/types";

@Component({
  components: { Card, ChartDoughnut },
})
export default class Dashboard extends Vue {
  @Getter getAllAccounts!: AccountType;

  mounted(): void {
    console.log(this.getAllAccounts);
  }
}
</script>

<style scoped>
.dashboard .card-statics {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex: 0 0 33.333333%;
}
</style>

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
</style>

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
import { Component, Vue, Prop } from "vue-property-decorator";
import Card from "../components/Card.vue";
import ChartDoughnut from "../components/charts/ChartDoughnut.vue";

@Component({
  components: { Card, ChartDoughnut },
})
export default class Dashboard extends Vue {
  @Prop()
  msg!: string;
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

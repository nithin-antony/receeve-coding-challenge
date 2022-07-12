<template>
  <div class="info-card">
    <div class="title">{{ cardTitle }}</div>
    <div class="content">
      <span>{{ formatCurrency.format(totalAmount / 100) }}</span>
      <span class="statics-info">
        <span :class="upTrend ? 'icon-up' : 'icon-down'"
          ><font-awesome-icon
            :icon="upTrend ? 'arrow-trend-up' : 'arrow-trend-down'"
        /></span>
        15.00% (+ €9,424.31)</span
      >
    </div>
    <p>{{ formatNumber.format(totalClaims) }} claims</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class Card extends Vue {
  @Prop({ default: "Card header" }) readonly cardTitle!: string;
  @Prop({ default: 78900 }) readonly totalAmount!: number;
  @Prop({ default: 67800 }) readonly totalClaims!: number;
  @Prop({ default: true }) readonly upTrend!: boolean;

  formatCurrency = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  });

  formatNumber = new Intl.NumberFormat("de-DE");
}
</script>

<style scoped>
.info-card {
  width: 320px;
  height: 100px;
  background-color: rgb(9, 15, 25);
  color: rgb(198, 211, 231);
  padding: 8px 20px;
  border-radius: 16px;
}
.info-card .title {
  font-weight: 500;
  line-height: 1.5;
}

.info-card .content {
  font-size: 2rem;
  letter-spacing: -0.01em;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.content .statics-info {
  font-size: 0.87rem;
  font-weight: 500;
}

.info-card p {
  margin: 0;
}

.statics-info .icon-up {
  color: #42b983;
}
.statics-info .icon-down {
  color: #cc0f35;
}
</style>

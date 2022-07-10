<template>
  <div class="info-card">
    <div class="title">Claims resolved in the period</div>
    <div class="content">
      <span>€72,253.01</span>
      <span class="statics-info">
        <span :class="upTrend ? 'icon-up' : 'icon-down'"
          ><font-awesome-icon
            :icon="upTrend ? 'arrow-trend-up' : 'arrow-trend-down'"
        /></span>
        15.00% (+ €9,424.31)</span
      >
    </div>
    <p>8.234 claims</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class Card extends Vue {
  @Prop()
  msg!: string;

  public upTrend: boolean = true;
}
</script>

<style scoped>
.info-card {
  width: 320px;
}
.info-card .title {
  font-weight: 500;
  color: #7a7a7a;
  line-height: 1.5;
}

.info-card .content {
  font-size: 2rem;
  letter-spacing: -0.01em;
  color: #242424;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.content .statics-info {
  font-size: 0.87rem;
  font-weight: 500;
  color: #7a7a7a;
}

.info-card p {
  color: #7a7a7a;
  margin: 0;
}

.statics-info .icon-up {
  color: #42b983;
}
.statics-info .icon-down {
  color: #cc0f35;
}
</style>

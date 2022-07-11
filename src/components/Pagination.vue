<template>
  <div class="pagination">
    <button class="btn" @click="goToFirstPage" :disabled="rangeStart === 0">
      <span class="icon"><font-awesome-icon icon="angles-left"/></span>
    </button>
    <button class="btn" @click="goToPrevPage" :disabled="rangeStart === 0">
      <span class="icon"><font-awesome-icon icon="angle-left"/></span>
    </button>
    <span class="pagination-content"
      >{{ rangeStart + 1 }} to {{ rangeEnd }} of {{ total }}</span
    >
    <button class="btn" @click="goToNextPage" :disabled="rangeEnd === total">
      <span class="icon"><font-awesome-icon icon="angle-right"/></span>
    </button>
    <button class="btn" @click="goToLastPage" :disabled="rangeEnd === total">
      <span class="icon"><font-awesome-icon icon="angles-right"/></span>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch, Emit } from "vue-property-decorator";
@Component
export default class Pagination extends Vue {
  @Prop({ default: Array }) readonly data!: [];
  @Prop({ default: 10 }) readonly stepSize!: number;

  total: number = 0;
  rangeStart: number = 0;
  rangeEnd: number = this.stepSize;

  @Watch("data", { immediate: true, deep: true })
  onParentDataChanged() {
    this.total = this.data.length;
    this.updatePage(0);
  }
  @Emit("pageStart")
  updatePage(startRange: number) {
    this.rangeStart = startRange;
    const endRange = Math.min(startRange + this.stepSize, this.total);
    this.rangeEnd = endRange;
  }

  goToFirstPage() {
    const start = 0;
    this.updatePage(start);
  }
  goToLastPage() {
    const range = this.total % this.stepSize || this.stepSize;
    const start = this.total - range;
    this.updatePage(start);
  }
  goToNextPage() {
    const start = this.rangeStart + this.stepSize;
    this.updatePage(start);
  }
  goToPrevPage() {
    const start = this.rangeStart - this.stepSize;
    this.updatePage(start);
  }
}
</script>

<style scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 10px;
}
.icon {
  margin: 10px;
}

.btn {
  background-color: #fff;
  border: none;
  color: #205adf;
  padding: 12px 0px;
  font-size: 16px;
  cursor: pointer;
}

.btn:disabled {
  color: gray;
  cursor: not-allowed;
}
.pagination-content {
  color: #205adf;
  font-weight: 500;
}
</style>

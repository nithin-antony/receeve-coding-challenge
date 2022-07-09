<template>
  <div class="label" :class="status">{{ status }}</div>
</template>

<script lang="ts">
import { Component, Vue, Prop, PropSync } from "vue-property-decorator";
@Component
export default class ClaimStatus extends Vue {
  @Prop() status!: string;
  @PropSync("status", { type: String }) getClass!: string;
}
</script>

<style scoped>
.label {
  color: #fff;
  padding: 3px 7px;
  border: 0px solid;
  border-radius: 3px;
  width: 70px;
  text-align: center;
}

.OPEN {
  background-color: #ffc46d;
}
.PAID {
  background-color: #28e070;
}

.DELETED {
  background-color: #f65050;
}
</style>

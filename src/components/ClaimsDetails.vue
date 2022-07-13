<template>
  <div class="claims-details">
    <div class="claims-header-content">
      <h2 class="fixed-header">Claim details</h2>
      <h4>Open claims({{ getOpenClaims() }})</h4>
    </div>
    <div v-if="claims.length" class="claims-table-container">
      <table id="claims-table">
        <tr class="table_row-header">
          <th>Due date</th>
          <th>Base amount</th>
          <th>Fees</th>
          <th>Status</th>
        </tr>
        <tr v-for="claim in paginatedData" :key="claim.id" class="table_row">
          <td>{{ claim.dueDate }}</td>
          <td>{{ formatCurrency(claim.baseAmount) }}</td>
          <td>{{ formatCurrency(claim.fees) }}</td>
          <td>
            <ClaimStatus :status="claim.status" />
          </td>
        </tr>
      </table>

      <Pagination
        :data="claims"
        :stepSize="stepSize"
        @pageStart="getPaginatedData"
      />
    </div>
    <h3 class="no-data" v-else>Not found any data</h3>
  </div>
</template>

<script lang="ts">
import { Prop, Watch } from "vue-property-decorator";
import { Component, Mixins } from "vue-mixin-decorator";
import { ClaimType } from "@/types";
import ClaimStatus from "./ClaimStatus.vue";
import Pagination from "./Pagination.vue";
import { AppMixins } from "../mixins/AppMixins";

@Component({ components: { ClaimStatus, Pagination } })
export default class ClaimsDetails extends Mixins(AppMixins) {
  @Prop({ default: Array }) readonly claims!: ClaimType[];
  stepSize: number = 5;
  paginatedData: ClaimType[] = [];

  @Watch("claims")
  onAccountsDataChanged() {
    this.getPaginatedData(this.stepSize);
  }

  getOpenClaims() {
    return this.claims.filter((claim) => claim.status === "OPEN").length;
  }

  getPaginatedData(pageStart: number) {
    this.paginatedData = this.claims.slice(
      pageStart,
      pageStart + this.stepSize
    );
  }
}
</script>

<style scoped>
.claims-details {
  background: #fff;
  width: 95%;
  height: 400px;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  overflow: auto;
}

.claims-details p {
  color: #7a7a7a;
  margin: 0;
}

.claims-header-content {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #d9d9d9;
  padding: 5px;
  background-color: #fafafa;
  font-weight: bold;
}

.claims-header-content .fixed-header {
  position: sticky;
  position: -webkit-sticky;
  top: 0px;
  z-index: 10;
  background: #fff;
}

.claims-table-container {
  padding-top: 10px;
  padding: 10px;
}

#claims-table {
  border-collapse: collapse;
  width: 100%;
  background: #fff;
}

.table_row-header {
  border-bottom: 1px solid #d0d7de;
}
.table_row {
  border-bottom: 1px dotted #d0d7de;
}

#claims-table td {
  padding: 10px 0 10px 0;
}

#claims-table th {
  padding-bottom: 12px;
  text-align: left;
  color: #27292e;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 10;
  background: #fff;
  width: 25%;
  text-transform: uppercase;
}

.no-data {
  text-align: center;
}
</style>

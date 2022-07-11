<template>
  <div class="claims-details">
    <div class="header-content">
      <h2 class="fixed-header">Claim details</h2>
      <h4>Open claims({{ getOpenClaims() }})</h4>
    </div>
    <div v-if="claims.length">
      <table id="claims-table">
        <tr>
          <th>Due date</th>
          <th>Base amount</th>
          <th>Fees</th>
          <th>Status</th>
        </tr>
        <tr v-for="claim in paginatedData" :key="claim.id">
          <td>{{ claim.dueDate }}</td>
          <td>{{ formatCurrency.format(claim.baseAmount / 100) }}</td>
          <td>{{ formatCurrency.format(claim.fees / 100) }}</td>
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
    <h3 class="no-data" v-else>not found any data</h3>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import ClaimStatus from "./ClaimStatus.vue";
import Pagination from "./Pagination.vue";

interface claimsType {
  id: string;
  accountId: string;
  currency: string;
  baseAmount: number;
  fees: number;
  dueDate: string;
  status: string;
  deletedAt?: string;
}
@Component({ components: { ClaimStatus, Pagination } })
export default class ClaimsDetails extends Vue {
  @Prop({ default: Array }) readonly claims!: claimsType[];
  stepSize: number = 5;
  paginatedData: claimsType[] = [];

  @Watch("claims")
  onAccountsDataChanged() {
    this.getPaginatedData(this.stepSize);
  }

  formatCurrency = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  });

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
  width: 90%;
  height: 400px;
  border: 1px solid #27292e;
  border-radius: 5px;
  padding: 20px;
  overflow: auto;
}

.claims-details p {
  color: #7a7a7a;
  margin: 0;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-content .fixed-header {
  position: sticky;
  position: -webkit-sticky;
  top: 0px;
  z-index: 10;
  background: #fff;
}

#claims-table {
  border-collapse: collapse;
  width: 100%;
  background: #fff;
}

#claims-table tr {
  border-bottom: 1px solid #27292e;
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
}

.no-data {
  text-align: center;
}
</style>

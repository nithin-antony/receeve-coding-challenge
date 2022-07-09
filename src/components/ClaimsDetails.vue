<template>
  <div class="claims-details">
    <table id="claims-table">
      <tr>
        <th>Due date</th>
        <th>Base amount</th>
        <th>Fees</th>
        <th>Status</th>
      </tr>
      <tr v-for="claim in claims" :key="claim.id">
        <td>{{ claim.dueDate }}</td>
        <td>{{ formatCurrency.format(claim.baseAmount / 100) }}</td>
        <td>{{ formatCurrency.format(claim.fees / 100) }}</td>
        <td>
          <ClaimStatus :status="claim.status" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import ClaimStatus from "./ClaimStatus.vue";

interface claimsTypes {
  id: string;
  accountId: string;
  currency: string;
  baseAmount: number;
  fees: number;
  dueDate: string;
  status: string;
  deletedAt?: string;
}
@Component({ components: { ClaimStatus } })
export default class ClaimsDetails extends Vue {
  @Prop() claims!: claimsTypes[];
  textToFormat: string = "Hello world";

  capitalize(value: string) {
    if (!value) return "";
    value = value.toString();
    return value.charAt(0).toLowerCase() + value.slice(1);
  }

  formatCurrency = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  });
}
</script>

<style scoped>
.claims-details {
  width: 60%;
  height: auto;
  border: 1px solid #27292e;
  border-radius: 5px;
  padding: 20px;
}

#claims-table {
  border-collapse: collapse;
  width: 100%;
}

#claims-table tr {
  border-bottom: 1px solid #27292e;
}

#claims-table td {
  padding: 10px 0 10px 0;
}

#claims-table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  color: #27292e;
}
</style>

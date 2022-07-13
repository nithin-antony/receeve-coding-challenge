<template>
  <div>
    <h1 class="fixed-header">Accounts</h1>
    <table id="custom-table">
      <tr class="table_row-header">
        <th>
          Full Name
          <!-- <span class="icon"><font-awesome-icon icon="sort-up"/></span>
            <span class="icon"><font-awesome-icon icon="sort-down" /></span> -->
        </th>
        <th>Mobile Phone Number</th>
        <th>Email</th>
        <th>Country</th>
      </tr>
      <tr v-for="account in paginatedData" :key="account.id" class="table_row">
        <td>
          <a @click="accountDetails(account.id)" class="link">{{
            generateFullName(account)
          }}</a>
        </td>
        <td>{{ account.debtor.mobilePhone }}</td>
        <td>{{ account.debtor.email }}</td>
        <td>{{ account.debtor.address.country }}</td>
      </tr>
    </table>

    <Pagination
      :data="accounts"
      :stepSize="stepSize"
      @pageStart="getPaginatedData"
    />
  </div>
</template>

<script lang="ts">
import { Prop, Watch } from "vue-property-decorator";
import { Component, Mixins } from "vue-mixin-decorator";
import { AccountType } from "@/types";
import { AppMixins } from "../mixins/AppMixins";
import Pagination from "./Pagination.vue";

@Component({ components: { Pagination } })
export default class AccountsDetails extends Mixins(AppMixins) {
  @Prop({ default: Array }) readonly accounts!: AccountType[];
  stepSize: number = 10;
  paginatedData: AccountType[] = [];

  @Watch("accounts")
  onAccountsDataChanged() {
    this.getPaginatedData(this.stepSize);
  }

  accountDetails(id: string) {
    this.$router.push({ name: "account-details", params: { id } });
  }

  getPaginatedData(pageStart: number) {
    this.paginatedData = this.accounts.slice(
      pageStart,
      pageStart + this.stepSize
    );
  }
}
</script>

<style scoped>
.fixed-header {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 10;
  background: #fff;
}
#custom-table {
  border-collapse: collapse;
  width: 100%;
  background: #fff;
}

.table_row-header {
  border-top: 1px solid #d0d7de;
  border-bottom: 1px solid #d0d7de;
  margin-top: 5px;
}
.table_row {
  border-bottom: 1px dotted #d0d7de;
}

#custom-table td {
  padding: 10px 0 10px 0;
}

#custom-table th {
  padding: 12px 0px;
  text-align: left;
  color: #27292e;
  position: sticky;
  position: -webkit-sticky;
  top: 40px;
  z-index: 10;
  background: #fff;
  width: 25%;
  text-transform: uppercase;
}

.link {
  color: #205adf;
  cursor: pointer;
  font-weight: 500;
}
.link:hover {
  text-decoration: underline;
}
</style>

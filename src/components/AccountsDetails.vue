<template>
  <div>
    <h1 class="fixed-header">Accounts</h1>
    <div class="accounts-details">
      <table id="custom-table">
        <tr>
          <th>
            Full Name
            <!-- <span class="icon"><font-awesome-icon icon="sort-up"/></span>
            <span class="icon"><font-awesome-icon icon="sort-down" /></span> -->
          </th>
          <th>Mobile Phone Number</th>
          <th>Email</th>
          <!-- <th>Action</th> -->
        </tr>
        <tr v-for="account in paginatedData" :key="account.id">
          <td>
            <a @click="accountDetails(account.id)" class="link">{{
              generateFullName(account)
            }}</a>
          </td>
          <td>{{ account.debtor.mobilePhone }}</td>
          <td>{{ account.debtor.email }}</td>
          <!-- <td><a @click="viewAddressToggle()" class="link">address</a></td> -->
        </tr>
      </table>

      <Pagination
        :data="accounts"
        :stepSize="stepSize"
        @pageStart="getPaginatedData"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { AccountType } from "@/types";
import Pagination from "./Pagination.vue";

@Component({ components: { Pagination } })
export default class AccountsDetails extends Vue {
  @Prop({ default: Array }) readonly accounts!: AccountType[];
  stepSize: number = 10;
  paginatedData: AccountType[] = [];

  @Watch("accounts")
  onAccountsDataChanged() {
    this.getPaginatedData(this.stepSize);
  }

  generateFullName = (account: AccountType) => {
    return `${account.debtor?.title ?? ""} ${account.debtor?.firstName ?? ""} ${
      account.debtor.lastName
    }`;
  };

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
.accounts-details {
  background: #fff;
  width: 90%;
  height: auto;
  border: 1px solid #27292e;
  border-radius: 5px;
  padding: 20px;
  overflow: auto;
}
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
}

#custom-table tr {
  border-bottom: 1px solid #27292e;
}

#custom-table td {
  padding: 10px 0 10px 0;
}

#custom-table th {
  padding-bottom: 12px;
  text-align: left;
  color: #27292e;
  position: sticky;
  position: -webkit-sticky;
  top: 40px;
  z-index: 10;
  background: #fff;
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

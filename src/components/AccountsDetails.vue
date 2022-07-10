<template>
  <div>
    <h1 class="fixed-header">Accounts</h1>
    <table id="custom-table">
      <tr>
        <th>Full Name</th>
        <th>Mobile Phone Number</th>
        <th>Email</th>
        <!-- <th>Action</th> -->
      </tr>
      <tr v-for="account in accounts" :key="account.id">
        <td>
          <a @click="claimDetails(account.id)" class="link">{{
            generateFullName(account)
          }}</a>
        </td>
        <td>{{ account.debtor.mobilePhone }}</td>
        <td>{{ account.debtor.email }}</td>
        <!-- <td><a @click="viewAddressToggle()" class="link">address</a></td> -->
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
interface account {
  id: string;
  debtor: {
    title: string;
    firstName: string;
    lastName: string;
    address: {
      address: string;
      city: string;
      state: string;
      zip: number;
      country: string;
    };
    mobilePhone: string;
    email: string;
  };
}
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class AccountsDetails extends Vue {
  @Prop({ default: Array }) readonly accounts!: account[];

  generateFullName = (account: account) => {
    return `${account.debtor.title} ${account.debtor.firstName} ${account.debtor.lastName}`;
  };

  claimDetails(id: string) {
    this.$router.push({ name: "claims-details", params: { id } });
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
}

#custom-table tr {
  border-bottom: 1px solid #27292e;
}

#custom-table td {
  padding: 10px 0 10px 0;
}

#custom-table th {
  padding-top: 12px;
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

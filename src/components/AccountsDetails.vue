<template>
  <div class="hello">
    <h1>Accounts</h1>
    <table id="custom-table">
      <tr>
        <th>Full Name</th>
        <th>Mobile Phone Number</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
      <tr v-for="account in accounts" :key="account.id">
        <td>
          <a @click="claimDetails(account.id)" class="link">{{
            generateFullName(account)
          }}</a>
        </td>
        <td>{{ account.debtor.mobilePhone }}</td>
        <td>{{ account.debtor.email }}</td>
        <td><a @click="doSomething" class="link">address</a></td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class AccountsDetails extends Vue {
  @Prop()
  msg!: string;

  accounts = [
    {
      id: "ff5f2424-0a46-444d-925c-d5bfb248e6f0",
      debtor: {
        title: "Ms.",
        firstName: "Oliver",
        lastName: "Mcmahon",
        address: {
          address: "396 Johnson Avenue, Rowe, Virgin Islands, 4670",
          city: "Century",
          state: "Missouri",
          zip: 73208,
          country: "Liechtenstein",
        },
        mobilePhone: "+1 (956) 531-2032",
        email: "mcmahon.oliver@sureplex.name",
      },
    },
    {
      id: "45887367-1882-46fd-a5f0-8a60d60def18",
      debtor: {
        title: "Mr",
        firstName: "Naomi",
        lastName: "Cooper",
        address: {
          address: "962 Highland Place, Coyote, North Dakota, 6633",
          city: "Wyano",
          state: "Alabama",
          zip: 31657,
          country: "Liberia",
        },
        mobilePhone: "+1 (883) 600-2980",
        email: "cooper.naomi@assistix.me",
      },
    },
    {
      id: "31acce96-4fc4-4da7-9345-5f3ba5fb00b8",
      debtor: {
        title: "Dr.",
        firstName: "Koch",
        lastName: "Guy",
        address: {
          address: "629 Engert Avenue, Wanamie, California, 3137",
          city: "Fannett",
          state: "Vermont",
          zip: 70087,
          country: "Hungary",
        },
        mobilePhone: "+1 (819) 553-2945",
        email: "guy.koch@housedown.biz",
      },
    },
  ];

  generateFullName = (account: object) => {
    return `${account.debtor.title} ${account.debtor.firstName} ${account.debtor.lastName}`;
  };

  doSomething() {
    this.$router.push({ name: "dashboard" });
  }

  claimDetails(id: string) {
    this.$router.push({ name: "claims-details", params: { id } });
  }
}
</script>

<style scoped>
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
}

.link {
  color: #205adf;
  cursor: pointer;
  font-weight: 500;
}
link:hover {
  text-decoration: underline;
}
</style>

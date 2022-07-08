<template>
  <div class="challenge">
    <!-- <Dashboard msg="Welcome to the challenge 🐰" /> -->
    <!-- <Accounts /> -->
    <ContactDetails v-bind:contactDeatils="contactDeatils" />
  </div>
</template>

<script lang="ts">
import Dashboard from "./components/Dashboard.vue";
import Accounts from "./components/Accounts.vue";
import ContactDetails from "./components/ContactDetails.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({ components: { Dashboard, Accounts, ContactDetails } })
export default class App extends Vue {
  mounted(): void {
    console.log("let's go");
  }
  accountData = {
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
  };
  contactDeatils = {
    ...this.accountData.debtor.address,
    mobilePhone: this.accountData.debtor.mobilePhone,
    email: this.accountData.debtor.mobilePhone,
  };
}
</script>

<style>
.challenge {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

#company-logo {
  width: 120px;
}
</style>

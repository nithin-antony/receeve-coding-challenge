<template>
  <div>
    <button @click="accountDetails" class="btn">
      <font-awesome-icon icon="angle-left" />{{ " " }}Back
    </button>
    <h1>Claim details</h1>
    <div class="claim-page">
      <div class="contact-details">
        <ContactDetails v-bind:contactDeatils="contactDeatils" />
      </div>
      <div class="claims-details">
        <ClaimsDetails :claims="claims" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ContactDetails from "../components/ContactDetails.vue";
import ClaimsDetails from "../components/ClaimsDetails.vue";

@Component({
  components: { ContactDetails, ClaimsDetails },
})
export default class Claim extends Vue {
  mounted(): void {
    console.log("let's go");
  }

  accountDetails() {
    this.$router.push({ name: "accounts-details" });
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
    email: this.accountData.debtor.email,
  };

  claims = [
    {
      id: "4b5b0de4-59c2-4153-8cfa-2ed019878fa8",
      accountId: "ff5f2424-0a46-444d-925c-d5bfb248e6f0",
      currency: "EUR,",
      baseAmount: 96025,
      fees: 76642,
      dueDate: "2020-03-13",
      status: "OPEN",
    },
    {
      id: "c88e1283-fe38-4ca2-bdd4-2cd93c7e5e0a",
      accountId: "ff5f2424-0a46-444d-925c-d5bfb248e6f0",
      currency: "EUR,",
      baseAmount: 79817,
      fees: 64754,
      dueDate: "2020-03-28",
      status: "PAID",
      paidAt: "2020-05-16",
    },
    {
      id: "82dc8117-5b9d-4117-b5c5-430d1e728c3c",
      accountId: "ff5f2424-0a46-444d-925c-d5bfb248e6f0",
      currency: "EUR,",
      baseAmount: 76725,
      fees: 22861,
      dueDate: "2020-02-28",
      status: "OPEN",
    },
    {
      id: "2ffacf3f-e292-4561-bd3b-46a2a4f00da6",
      accountId: "ab8e9012-28eb-491c-98a6-8bfe5ee6bfa8",
      currency: "EUR,",
      baseAmount: 81145,
      fees: 24312,
      dueDate: "2020-02-03",
      status: "DELETED",
      deletedAt: "2020-04-07",
    },
    {
      id: "4b5b0de4-59c2-4153-8cfa-2ed019878fa8",
      accountId: "ff5f2424-0a46-444d-925c-d5bfb248e6f0",
      currency: "EUR,",
      baseAmount: 96025,
      fees: 76642,
      dueDate: "2020-03-13",
      status: "OPEN",
    },
    {
      id: "c88e1283-fe38-4ca2-bdd4-2cd93c7e5e0a",
      accountId: "ff5f2424-0a46-444d-925c-d5bfb248e6f0",
      currency: "EUR,",
      baseAmount: 79817,
      fees: 64754,
      dueDate: "2020-03-28",
      status: "PAID",
      paidAt: "2020-05-16",
    },
    {
      id: "82dc8117-5b9d-4117-b5c5-430d1e728c3c",
      accountId: "ff5f2424-0a46-444d-925c-d5bfb248e6f0",
      currency: "EUR,",
      baseAmount: 76725,
      fees: 22861,
      dueDate: "2020-02-28",
      status: "OPEN",
    },
    {
      id: "2ffacf3f-e292-4561-bd3b-46a2a4f00da6",
      accountId: "ab8e9012-28eb-491c-98a6-8bfe5ee6bfa8",
      currency: "EUR,",
      baseAmount: 81145,
      fees: 24312,
      dueDate: "2020-02-03",
      status: "DELETED",
      deletedAt: "2020-04-07",
    },
    {
      id: "4b5b0de4-59c2-4153-8cfa-2ed019878fa8",
      accountId: "ff5f2424-0a46-444d-925c-d5bfb248e6f0",
      currency: "EUR,",
      baseAmount: 96025,
      fees: 76642,
      dueDate: "2020-03-13",
      status: "OPEN",
    },
    {
      id: "c88e1283-fe38-4ca2-bdd4-2cd93c7e5e0a",
      accountId: "ff5f2424-0a46-444d-925c-d5bfb248e6f0",
      currency: "EUR,",
      baseAmount: 79817,
      fees: 64754,
      dueDate: "2020-03-28",
      status: "PAID",
      paidAt: "2020-05-16",
    },
    {
      id: "82dc8117-5b9d-4117-b5c5-430d1e728c3c",
      accountId: "ff5f2424-0a46-444d-925c-d5bfb248e6f0",
      currency: "EUR,",
      baseAmount: 76725,
      fees: 22861,
      dueDate: "2020-02-28",
      status: "OPEN",
    },
    {
      id: "2ffacf3f-e292-4561-bd3b-46a2a4f00da6",
      accountId: "ab8e9012-28eb-491c-98a6-8bfe5ee6bfa8",
      currency: "EUR,",
      baseAmount: 81145,
      fees: 24312,
      dueDate: "2020-02-03",
      status: "DELETED",
      deletedAt: "2020-04-07",
    },
  ];
}
</script>

<style scoped>
.claim-page {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-areas: "Contact Claim";
  grid-gap: 50px;
}
.contact-details {
  grid-area: Contact;
}
.claims-details {
  grid-area: Claim;
}

.btn {
  background-color: #fff;
  border: none;
  color: #205adf;
  padding: 12px 16px 12px 0px;
  font-size: 16px;
  cursor: pointer;
}
.btn:hover {
  background-color: #e1e4ea;
}
</style>

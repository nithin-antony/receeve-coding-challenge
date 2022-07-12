<template>
  <div>
    <button @click="accountDetails" class="btn">
      <font-awesome-icon icon="angle-left" />{{ " " }}Accounts
    </button>
    <div class="account-header">
      <h1>{{ generateFullName(debtorDeatils) }}</h1>
      <button @click="coppyToClipboard" class="btn">
        Share {{ " " }}<font-awesome-icon icon="share-from-square" />
      </button>
    </div>

    <div class="claim-page">
      <div class="contact-details">
        <ContactDetails v-bind:contactDeatils="debtorDeatils" />
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
import { getAllClaims, getAllAccounts } from "../services/ClaimService";

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

@Component({
  components: { ContactDetails, ClaimsDetails },
})
export default class Claim extends Vue {
  debtorDeatils: account = {
    id: "",
    debtor: {
      title: "",
      firstName: "",
      lastName: "",
      address: {
        address: "",
        city: "",
        state: "",
        zip: 0,
        country: "",
      },
      mobilePhone: "",
      email: "",
    },
  };
  claims = [];

  mounted(): void {
    const accountId = this.$route.params.id;
    Promise.all([getAllClaims(), getAllAccounts()]).then((response: any) => {
      const accountClaims = response[0].filter(
        (claim) => claim.accountId === accountId
      );
      const sortedClaims = accountClaims.sort((a, b) => {
        return new Date(b.dueDate) - new Date(a.dueDate);
      });
      this.claims = sortedClaims;
      const accountData = response[1].filter(
        (account) => account.id === accountId
      );
      const contactDeatils = {
        debtor: {
          title: accountData[0].debtor.title,
          firstName: accountData[0].debtor.firstName,
          lastName: accountData[0].debtor.lastName,
        },
        ...accountData[0].debtor.address,
        mobilePhone: accountData[0].debtor.mobilePhone,
        email: accountData[0].debtor.email,
      };
      this.debtorDeatils = contactDeatils;
    });
  }

  accountDetails() {
    this.$router.push({ name: "accounts-details" });
  }

  async coppyToClipboard() {
    try {
      await navigator.clipboard.writeText(
        window.location.origin + this.$router.currentRoute.fullPath
      );
      alert("Copied");
    } catch ($e) {
      alert("Cannot copy");
    }
  }
  generateFullName = (debtorDeatils: account) => {
    return `${debtorDeatils.debtor?.title ?? ""} ${
      debtorDeatils.debtor.firstName
    } ${debtorDeatils.debtor.lastName}`;
  };
}
</script>

<style scoped>
.account-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 50px;
}

.account-header .icon {
  color: #205adf;
}
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
  padding: 12px 0px;
  font-size: 16px;
  cursor: pointer;
}
.btn:hover {
  text-decoration: underline;
}
</style>

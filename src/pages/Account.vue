<template>
  <div>
    <button @click="accountDetails" class="btn">
      <font-awesome-icon icon="angle-left" />{{ " " }}Accounts
    </button>
    <div class="account-header">
      <h1>{{ generateFullName(getAccountDetails) }}</h1>
      <button @click="coppyToClipboard" class="btn">
        Share {{ " " }}<font-awesome-icon icon="share-from-square" />
      </button>
    </div>

    <div class="claim-page">
      <div class="contact-details">
        <ContactDetails v-bind:contactDeatils="getAccountDetails" />
      </div>
      <div class="claims-details">
        <ClaimsDetails :claims="getCliamForAccount" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ActionContext } from "vuex";
import { Getter, Action } from "vuex-class";
import ContactDetails from "../components/ContactDetails.vue";
import ClaimsDetails from "../components/ClaimsDetails.vue";
import { StateType, ClaimType, AccountType } from "@/types";

@Component({
  components: { ContactDetails, ClaimsDetails },
})
export default class Claim extends Vue {
  @Getter getAccountDetails!: AccountType;
  @Getter getCliamForAccount!: ClaimType[];
  @Action accountDetailsById!: ActionContext<StateType, StateType>;

  mounted(): void {
    const accountId = this.$route.params.id;
    this.accountDetailsById(accountId);
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

  generateFullName = (account: AccountType) => {
    return `${account.debtor?.title ?? ""} ${account.debtor?.firstName ?? ""} ${
      account.debtor.lastName
    }`;
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

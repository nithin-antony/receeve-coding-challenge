<template>
  <div>
    <button @click="moveToAccountDetails" class="btn">
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
        <ContactDetails :contactDeatils="getAccountDetails" />
      </div>
      <div class="claims-details">
        <ClaimsDetails :claims="getCliamForAccount" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Watch } from "vue-property-decorator";
import { Component, Mixins } from "vue-mixin-decorator";
import { Getter, Action, State } from "vuex-class";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import ContactDetails from "../components/ContactDetails.vue";
import ClaimsDetails from "../components/ClaimsDetails.vue";
import { AppMixins } from "../mixins/AppMixins";
import { ClaimType, AccountType } from "@/types";
Vue.use(VueToast);

@Component({
  components: { ContactDetails, ClaimsDetails },
})
export default class Claim extends Mixins(AppMixins) {
  @State((state) => state.accounts) accountsState: AccountType;
  @Getter getAccountDetails!: AccountType;
  @Getter getCliamForAccount!: ClaimType[];
  // eslint-disable-next-line no-unused-vars
  @Action accountDetailsById!: (id: string) => void;
  @Action fethAllAccounts!: () => void;
  @Action fethAllClaims!: () => void;
  accountId: string = this.$route.params.id;

  mounted(): void {
    if (!Object.prototype.hasOwnProperty.call(this.getAccountDetails, "id")) {
      this.fethAllClaims();
      this.fethAllAccounts();
    }
    this.accountDetailsById(this.accountId);
  }

  @Watch("accountsState", { immediate: true, deep: true })
  onAccountsStateChanged() {
    this.accountDetailsById(this.accountId);
  }

  moveToAccountDetails() {
    this.$router.push({ name: "accounts-details" });
  }

  async coppyToClipboard() {
    try {
      await navigator.clipboard.writeText(
        window.location.origin + this.$router.currentRoute.fullPath
      );
      Vue.$toast.open({
        message: "Copied to clipboard!",
        position: "top-right",
      });
    } catch ($e) {
      alert("Cannot copy");
    }
  }
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

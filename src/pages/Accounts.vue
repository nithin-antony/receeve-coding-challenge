<template>
  <div>
    <AccountsDetails :accounts="accounts" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AccountsDetails from "@/components/AccountsDetails.vue";
import { getAllAccounts } from "../services/ClaimService";

@Component({
  components: { AccountsDetails },
})
export default class Accounts extends Vue {
  accounts = [];
  mounted() {
    getAllAccounts().then((response) => {
      console.log(response);
      this.accounts = response;
    });
  }
}
</script>

<style scoped>
.home-page {
  display: grid;
  grid-template-columns: 1fr 12fr;
  grid-template-areas: "NavBar AppContent";
  grid-gap: 20px;
}
.nav-bar {
  grid-area: NavBar;
}
.app-content {
  grid-area: AppContent;
}
</style>

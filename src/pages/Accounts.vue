<template>
  <div>
    <AccountsDetails :accounts="getAllAccounts" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";
import AccountsDetails from "@/components/AccountsDetails.vue";
import { AccountType } from "@/types";

@Component({
  components: { AccountsDetails },
})
export default class Accounts extends Vue {
  @Getter getAllAccounts!: AccountType[];
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

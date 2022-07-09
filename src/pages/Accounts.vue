<template>
  <div class="home-page">
    <div class="nav-bar">
      <NavigationBar />
    </div>
    <div class="app-content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AccountsDetails from "@/components/AccountsDetails.vue";

@Component({
  components: { AccountsDetails },
})
export default class Accounts extends Vue {
  mounted(): void {
    console.log("let's go");
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

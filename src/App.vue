<template>
  <div class="challenge">
    <Home />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action } from "vuex-class";
import Home from "./pages/Home.vue";

@Component({
  components: { Home },
})
export default class App extends Vue {
  @Action fethAllAccounts!: () => void;
  @Action fethAllClaims!: () => void;
  mounted(): void {
    this.fethAllAccounts();
    this.fethAllClaims();
  }
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

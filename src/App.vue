<template>
  <div class="challenge">
    <Home />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ActionContext } from "vuex";
import { Action } from "vuex-class";
import Home from "./pages/Home.vue";
import { StateType } from "@/types";

@Component({
  components: { Home },
})
export default class App extends Vue {
  @Action fethAllAccounts!: ActionContext<StateType, StateType>;
  @Action fethAllClaims!: ActionContext<StateType, StateType>;
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

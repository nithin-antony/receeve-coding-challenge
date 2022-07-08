<template>
  <div class="challenge">
    <Dashboard msg="Welcome to the challenge 🐰" />
  </div>
</template>

<script lang="ts">
import Dashboard from "./components/Dashboard/Dashboard.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({ components: { Dashboard } })
export default class App extends Vue {
  mounted(): void {
    console.log("let's go");
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

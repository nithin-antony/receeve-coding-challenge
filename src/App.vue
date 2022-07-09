<template>
  <div class="challenge">
    <HomePage />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HomePage from "./pages/HomePage.vue";

@Component({
  components: { HomePage },
})
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

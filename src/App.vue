<template>
  <div class="challenge">
    <Home />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Home from "./pages/Home.vue";

@Component({
  components: { Home },
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

<template>
  <div class="contact-details">
    <h3>Contact details</h3>
    <p>
      <span class="icon"><font-awesome-icon icon="phone"/></span>
      <span>{{ contactDeatils.debtor.mobilePhone }}</span>
    </p>
    <p>
      <span class="icon"><font-awesome-icon icon="envelope"/></span>
      <span>{{ contactDeatils.debtor.email }}</span>
    </p>
    <div class="address-block">
      <span class="icon"><font-awesome-icon icon="location-pin"/></span>
      <span class="address"
        >{{ contactDeatils.debtor.address.address }}{{ " , " }}
        {{
          `${contactDeatils.debtor.address.city}, ${contactDeatils.debtor.address.state}, ${contactDeatils.debtor.address.zip}, ${contactDeatils.debtor.address.country} `
        }}</span
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { AccountType } from "@/types";
@Component
export default class ContactDetails extends Vue {
  @Prop() contactDeatils!: AccountType;
  mounted(): void {
    console.log("let's go", this.contactDeatils);
  }
}
</script>

<style scoped>
.address-block {
  display: flex;
}

.contact-details {
  padding: 15px 10px;
  width: 350px;
  height: auto;
  border: 1px solid #27292e;
  border-radius: 5px;
}

p {
  font-weight: 500;
}
.icon {
  padding-right: 10px;
}

.address {
  font-weight: 500;
}
</style>

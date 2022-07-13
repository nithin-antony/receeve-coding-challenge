import Vue from "vue";
import { Mixin } from "vue-mixin-decorator";
import { AccountType } from "@/types";

@Mixin
export class AppMixins extends Vue {
  generateFullName = (account: AccountType) => {
    return `${account.debtor?.title ?? ""} ${account.debtor?.firstName ?? ""} ${
      account.debtor.lastName
    }`;
  };

  formatCurrency = (data: number) => {
    const formatter = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    });

    return formatter.format(data / 100);
  };

  formatNumber = new Intl.NumberFormat("de-DE");
}

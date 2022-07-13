import Vue from "vue";
import { Mixin } from "vue-mixin-decorator";
import { AccountType } from "@/types";
import { CURRENCY_UNIT } from "../utils/Constants";

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

    return formatter.format(data / CURRENCY_UNIT);
  };

  formatNumber = new Intl.NumberFormat("de-DE");
}

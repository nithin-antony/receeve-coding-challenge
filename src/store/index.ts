import Vue from "vue";
import Vuex, { ActionContext } from "vuex";
import { StateType, AccountType, ClaimType } from "@/types";
import { getAllAccounts, getAllClaims } from "../services/ClaimService";
import { logout } from "../services/AuthService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accounts: [],
    claims: [],
    accountClaims: [],
    accountDetails: {
      id: "",
      debtor: {
        title: "",
        firstName: "",
        lastName: "",
        address: {
          address: "",
          city: "",
          state: "",
          zip: 0,
          country: "",
        },
        mobilePhone: "",
        email: "",
      },
    },
    userName: "",
    dashboardData: [],
  },
  getters: {
    getAllAccounts(state: StateType): AccountType[] {
      return state.accounts;
    },
    getAllClaims(state: StateType): ClaimType[] {
      return state.claims;
    },
    getAccountDetails(state: StateType): AccountType {
      return state.accountDetails;
    },
    getCliamForAccount(state: StateType): ClaimType[] {
      return state.accountClaims;
    },
  },
  mutations: {
    setAccounts(state: StateType, data: AccountType[]): void {
      state.accounts = data;
    },

    setClaims(state: StateType, data: ClaimType[]): void {
      state.claims = data;
    },

    setAccountDetails(state: StateType, accountId: string) {
      const accountClaims = state.claims.filter(
        (claim: ClaimType) => claim.accountId === accountId
      );

      const sortedClaims = accountClaims.sort((a: ClaimType, b: ClaimType) => {
        return new Date(b.dueDate) - new Date(a.dueDate);
      });
      const accountData = state.accounts.filter(
        (account: AccountType) => account.id === accountId
      );

      const contactDeatils = Object.assign({}, accountData[0]);

      state.accountClaims = sortedClaims;
      state.accountDetails = contactDeatils;
    },

    userlogout(state: StateType) {
      state.userName = "";
    },
  },
  actions: {
    async fethAllAccounts(ctx: ActionContext<StateType, StateType>) {
      try {
        const data = await getAllAccounts();
        const sortedAccounts = data.sort((a: AccountType, b: AccountType) => {
          return (a.debtor.firstName + a.debtor.lastName).localeCompare(
            b.debtor.firstName + b.debtor.lastName
          );
        });
        ctx.commit("setAccounts", sortedAccounts);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },

    async fethAllClaims(ctx: ActionContext<StateType, StateType>) {
      try {
        const data = await getAllClaims();
        ctx.commit("setClaims", data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },

    accountDetailsById(
      ctx: ActionContext<StateType, StateType>,
      accountId: string
    ): void {
      ctx.commit("setAccountDetails", accountId);
    },

    async logoutUser(ctx: ActionContext<StateType, StateType>) {
      try {
        await logout();
        ctx.commit("userlogout");
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});

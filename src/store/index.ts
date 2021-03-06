import Vue from "vue";
import Vuex, { ActionContext } from "vuex";
import { StateType, AccountType, ClaimType } from "@/types";
import { getAllAccounts, getAllClaims } from "../services/ClaimService";
import { logout } from "../services/AuthService";
import { CURRENCY_UNIT } from "../utils/Constants";

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
    getDashboard(state: StateType): any[] {
      return state.dashboardData;
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
        return new Date(b.dueDate).valueOf() - new Date(a.dueDate).valueOf();
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

    setDashboard(state: StateType, data: ClaimType[]) {
      const getSum = (data: ClaimType[], key: string) => {
        return data.reduce(
          (previousValue: number, currentValue: any) =>
            previousValue + currentValue[key],
          0
        );
      };

      const filterClaimsByStatus = (data: Array<ClaimType>, status: string) => {
        return data.filter((claim: ClaimType) => claim.status === status);
      };
      const filterClaimsByDates = (
        data: Array<ClaimType>,
        startDate: string,
        endDate: string,
        key: string
      ) => {
        return data.filter((claim: any) => {
          return (
            new Date(claim[key]).valueOf() >= new Date(startDate).valueOf() &&
            new Date(claim[key]).valueOf() <= new Date(endDate).valueOf()
          );
        });
      };

      const openClaims = filterClaimsByStatus(data, "OPEN");
      const completedClaims = filterClaimsByStatus(data, "PAID");
      const deletedClaims = filterClaimsByStatus(data, "DELETED");
      const dateConfig = [
        { startDate: "2020-03-01", endDate: "2020-03-31" },
        { startDate: "2020-04-01", endDate: "2020-04-30" },
        { startDate: "2020-05-01", endDate: "2020-05-31" },
        { startDate: "2020-06-01", endDate: "2020-06-30" },
        { startDate: "2020-07-01", endDate: "2020-07-31" },
      ];

      const paidDataForChart = dateConfig.map((config) => {
        return filterClaimsByDates(
          data,
          config.startDate,
          config.endDate,
          "paidAt"
        ).length;
      });

      const activeDataForChart = dateConfig.map((config) => {
        return filterClaimsByDates(
          data,
          config.startDate,
          config.endDate,
          "dueDate"
        ).length;
      });

      const deletedDataForChart = dateConfig.map((config) => {
        return filterClaimsByDates(
          data,
          config.startDate,
          config.endDate,
          "deletedAt"
        ).length;
      });

      const claimnsOpen = {
        title: "Active claims",
        totalAmount: getSum(openClaims, "baseAmount") / CURRENCY_UNIT,
        totalClaims: openClaims.length,
        upTrend: true,
      };
      const claimnsDeleted = {
        title: "Deleted claims",
        totalAmount: getSum(deletedClaims, "baseAmount") / CURRENCY_UNIT,
        totalClaims: deletedClaims.length,
        upTrend: false,
      };
      const claimnsPaid = {
        title: "Completed claims",
        totalAmount: getSum(completedClaims, "baseAmount") / CURRENCY_UNIT,
        totalClaims: completedClaims.length,
        upTrend: true,
      };
      const chartData = {
        doughnutChart: {
          labels: ["Open", "Paid", "Deleted"],
          data: [
            openClaims.length,
            completedClaims.length,
            deletedClaims.length,
          ],
        },
        lineChart: {
          labels: ["March", "April", "May", "June", "July"],
          data: [
            {
              label: "Paid",
              backgroundColor: "rgba(255, 159, 64)",
              data: paidDataForChart,
            },
            {
              label: "Active",
              backgroundColor: "rgba(153, 102, 255)",
              data: activeDataForChart,
            },
            {
              label: "Completed",
              backgroundColor: "rgba(75, 192, 192)",
              data: deletedDataForChart,
            },
          ],
        },
      };

      state.dashboardData = {
        cardData: [claimnsOpen, claimnsDeleted, claimnsPaid],
        chartData,
      };
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

    async fethDashoardData(ctx: ActionContext<StateType, StateType>) {
      try {
        const data = await getAllClaims();
        ctx.commit("setDashboard", data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});

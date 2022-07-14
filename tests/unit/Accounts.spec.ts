import { shallowMount, createLocalVue, Wrapper } from "@vue/test-utils";
import Vue from "vue";
import Vuex from "vuex";
import Accounts from "@/pages/Accounts.vue";
import AccountsDetails from "@/components/AccountsDetails.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Account Component", () => {
  let actions: any;
  let getters: any;
  let store: any;
  let wrapper: Wrapper<Vue>;

  beforeEach(() => {
    actions = {
      fetchData: jest.fn(),
    };
    getters = {
      getAllAccounts: jest.fn(),
    };
    store = new Vuex.Store({
      getters,
      actions,
    });
    wrapper = shallowMount(Accounts, { localVue, store });
  });

  it("Accounts should a vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it("Accounts should render AccountDeatils", () => {
    const accountsDetails = wrapper.findComponent(AccountsDetails);
    expect(accountsDetails.exists()).toBe(true);
  });
});

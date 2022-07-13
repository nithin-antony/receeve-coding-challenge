import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Accounts from "@/pages/Accounts.vue";
import AccountsDetails from "@/components/AccountsDetails.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe.skip("Account Component", () => {
  let actions: any;
  let getters: any;
  let store: any;

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
  });

  it("Accounts should a vue instance", () => {
    const wrapper = shallowMount(Accounts);
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it("Accounts should render AccountDeatils", () => {
    const wrapper = shallowMount(Accounts, { localVue, store });
    const accountsDetails = wrapper.findComponent(AccountsDetails);
    expect(accountsDetails.exists()).toBe(true);
  });
});

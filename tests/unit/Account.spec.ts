import { shallowMount, createLocalVue, Wrapper } from "@vue/test-utils";
import Vue from "vue";
import Vuex from "vuex";
import Account from "@/pages/Account.vue";
import ContactDetails from "@/components/ContactDetails.vue";
//import ClaimsDetails from "../components/ClaimsDetails.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Account Component", () => {
  let state: any;
  let actions: any;
  let getters: any;
  let store: any;
  let wrapper: Wrapper<Vue>;

  beforeEach(() => {
    state = {
      accounts: [{}, {}],
    };
    actions = {
      accountDetailsById: jest.fn(),
      fethAllAccounts: jest.fn(),
      fethAllClaims: jest.fn(),
    };
    getters = {
      getAccountDetails: jest.fn(),
      getCliamForAccount: jest.fn(),
    };
    store = new Vuex.Store({
      state,
      getters,
      actions,
    });
    wrapper = shallowMount(Account, { localVue, store });
  });

  it("Account should a vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it.skip("Account should have ContactDetails", () => {
    const contactDetails = wrapper.findComponent(ContactDetails);
    expect(contactDetails.exists()).toBe(true);
  });
});

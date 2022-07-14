import { shallowMount, Wrapper } from "@vue/test-utils";
import Vue from "vue";
import ClaimsDetails from "@/components/ClaimsDetails.vue";

describe("ClaimsDetails component", () => {
  let wrapper: Wrapper<Vue>;
  beforeEach(() => {
    wrapper = shallowMount(ClaimsDetails, {
      propsData: { claims },
    });
  });
  const claims = [
    {
      id: "4b5b0de4",
      accountId: "ff5f2424",
      currency: "EUR,",
      baseAmount: 96025,
      fees: 76642,
      dueDate: "2020-03-13",
      status: "OPEN",
    },
    {
      id: "c88e1283",
      accountId: "ff5f2424",
      currency: "EUR,",
      baseAmount: 79817,
      fees: 64754,
      dueDate: "2020-03-28",
      status: "PAID",
      paidAt: "2020-05-16",
    },
  ];

  it("ClaimsDetails should a vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it("Should renders ClaimsDetails when props passed", () => {
    expect(wrapper.find(".claims-table-container").exists()).toBe(true);
  });

  it("Should renders error when empty data passed", () => {
    const wrapper = shallowMount(ClaimsDetails, {
      propsData: { claims: [] },
    });
    expect(wrapper.find(".no-data").exists()).toBe(true);
  });
});

import { shallowMount } from "@vue/test-utils";
import ClaimsDetails from "@/components/ClaimsDetails.vue";

describe("ClaimsDetails component", () => {
  it("renders status when props passed", () => {
    const claims = [
      {
        id: "4b5b0de4-59c2-4153-8cfa-2ed019878fa8",
        accountId: "ff5f2424-0a46-444d-925c-d5bfb248e6f0",
        currency: "EUR,",
        baseAmount: 96025,
        fees: 76642,
        dueDate: "2020-03-13",
        status: "OPEN",
      },
      {
        id: "c88e1283-fe38-4ca2-bdd4-2cd93c7e5e0a",
        accountId: "ff5f2424-0a46-444d-925c-d5bfb248e6f0",
        currency: "EUR,",
        baseAmount: 79817,
        fees: 64754,
        dueDate: "2020-03-28",
        status: "PAID",
        paidAt: "2020-05-16",
      },
      {
        id: "82dc8117-5b9d-4117-b5c5-430d1e728c3c",
        accountId: "ff5f2424-0a46-444d-925c-d5bfb248e6f0",
        currency: "EUR,",
        baseAmount: 76725,
        fees: 22861,
        dueDate: "2020-02-28",
        status: "OPEN",
      },
      {
        id: "2ffacf3f-e292-4561-bd3b-46a2a4f00da6",
        accountId: "ab8e9012-28eb-491c-98a6-8bfe5ee6bfa8",
        currency: "EUR,",
        baseAmount: 81145,
        fees: 24312,
        dueDate: "2020-02-03",
        status: "DELETED",
        deletedAt: "2020-04-07",
      },
    ];

    const wrapper = shallowMount(ClaimsDetails, {
      propsData: { claims },
    });
    expect(wrapper.text()).toMatch(claims[0].status);
  });
});

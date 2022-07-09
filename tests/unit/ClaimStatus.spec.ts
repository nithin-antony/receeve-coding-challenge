import { shallowMount } from "@vue/test-utils";
import ContactDetails from "@/components/ClaimStatus.vue";

describe("ClaimStatus component", () => {
  it("renders status when props passed", () => {
    const status = "OPEN";

    const wrapper = shallowMount(ContactDetails, {
      propsData: { status },
    });
    expect(wrapper.text()).toMatch(status);
  });
});

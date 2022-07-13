import { shallowMount } from "@vue/test-utils";
import ClaimStatus from "@/components/ClaimStatus.vue";

describe("ClaimStatus component", () => {
  it("renders status when props passed", () => {
    const status = "OPEN";

    const wrapper = shallowMount(ClaimStatus, {
      propsData: { status },
    });
    expect(wrapper.text()).toMatch(status);
  });
});

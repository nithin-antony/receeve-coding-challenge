import { shallowMount } from "@vue/test-utils";
import ContactDetails from "@/components/ContactDetails.vue";

describe("ContactDetails component", () => {
  it("renders mobile phone number when props passed", () => {
    const contactDeatils = {
      address: "396 Johnson Avenue, Rowe, Virgin Islands, 4670",
      city: "Century",
      state: "Missouri",
      zip: 73208,
      country: "Liechtenstein",
      mobilePhone: "+1 (956) 531-2032",
      email: "mcmahon.oliver@sureplex.name",
    };

    const wrapper = shallowMount(ContactDetails, {
      propsData: { contactDeatils },
    });
    expect(wrapper.text()).toMatch(contactDeatils.mobilePhone);
  });
});

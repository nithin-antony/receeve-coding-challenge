import { shallowMount, Wrapper } from "@vue/test-utils";
import Vue from "vue";
import ContactDetails from "@/components/ContactDetails.vue";

describe("ContactDetails component", () => {
  let wrapper: Wrapper<Vue>;
  beforeEach(() => {
    wrapper = shallowMount(ContactDetails, {
      propsData: { contactDeatils },
    });
  });
  const contactDeatils = {
    id: "abc-577-dhhh",
    debtor: {
      title: "Mr",
      firstName: "TestName",
      lastName: "TestName",
      address: {
        address: "Address line 1",
        city: "City",
        state: "State",
        zip: 1234,
        country: "Country",
      },
      mobilePhone: "1234567890",
      email: "test@email.com",
    },
  };
  it("ContactDetails should a vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it("Renders mobile phone number when props passed", () => {
    expect(wrapper.text()).toMatch(contactDeatils.debtor.mobilePhone);
  });

  it("Should not render data when pass empty object", () => {
    const contactDeatils = {};
    const wrapper = shallowMount(ContactDetails, {
      propsData: { contactDeatils },
    });
    expect(wrapper.text()).not.toMatch("Contact details");
  });
});

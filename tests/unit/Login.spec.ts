import { shallowMount, Wrapper } from "@vue/test-utils";
import Vue from "vue";
import Login from "@/pages/Login.vue";

describe("Login Component", () => {
  let wrapper: Wrapper<Vue>;

  beforeEach(() => {
    wrapper = shallowMount(Login);
  });

  // beforeEach(() => {
  //   wrapper.vm.login = jest.fn();
  // });
  it("Login should a vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  test("Should set username input", async () => {
    const input = wrapper.get("input[name=username]");
    await input.setValue("my@mail.com");
    await wrapper.vm.$nextTick();
    expect((input.element as HTMLInputElement).value).toContain("my@mail.com");
  });

  test("Should set password input", async () => {
    const input = wrapper.get("input[name=password]");
    await input.setValue("password");
    await wrapper.vm.$nextTick();
    expect((input.element as HTMLInputElement).value).toContain("password");
  });

  it("submit login on button clck", async () => {
    const wrapper = shallowMount(Login);
    const userNameInput = wrapper.get("input[name=password]");
    await userNameInput.setValue("password");
    const passwordInput = wrapper.get("input[name=username]");
    await passwordInput.setValue("my@mail.com");
    const button = wrapper.find(".qa-submit-btn");
    button.trigger("click");
    // expect(wrapper.vm.login).toHaveBeenCalledTimes(1);
  });
});

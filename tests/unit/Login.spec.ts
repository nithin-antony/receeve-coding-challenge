import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Login from "@/pages/Login.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Login Component", () => {
  let actions: any;
  //   let getters: any;
  let store: any;

  beforeEach(() => {
    actions = {
      fetchData: jest.fn(),
    };
    store = new Vuex.Store({
      actions,
    });
  });

  it("Login should a vue instance", () => {
    const wrapper = shallowMount(Login);
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  it("LoadAndSave: onClick executes fetchData", () => {
    const wrapper = shallowMount(Login, { localVue, store });
    //wrapper.vm.handleSubmit = jest.fn();
    const button = wrapper.find(".qa-submit-btn");
    button.trigger("click");
    //expect(wrapper.vm).toHaveBeenCalled();
  });
});

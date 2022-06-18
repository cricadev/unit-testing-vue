import LoginForm from "@/components/LoginForm";
import { mount } from "@vue/test-utils";

describe("LoginForm", () => {
  it("emits an event with a user data payload", () => {
    const wrapper = mount(LoginForm);
    //1 find text input
    const input = wrapper.find("[date-testid='name-input']");
    //2 set value for text input
    input.setValue("Cristian Casallas");
    //3 simulate form submission
    wrapper.trigger("submit");
    //4 Assert event has been emitted
    const formSubmittedCalls = wrapper.emitted("formSubmitted");
    expect(formSubmittedCalls).toHaveLength(1);
    //5 Assert payload is correct
    const expectedPayload = { name: "Cristian Casallas" };
    expect(wrapper.emitted("formSubmitted")[0][0]).toMatchObject(
      expectedPayload
    );
  });
});

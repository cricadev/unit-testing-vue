import MessageDisplay from "@/components/MessageDisplay";
import { mount } from "@vue/test-utils";
import { getMessage } from "@/services/axios";
import flushPromises from "flush-promises";

jest.mock("@/services/axios");
beforeEach(() => {
  jest.clearAllMocks();
});

describe("MessageDisplay", () => {
  it("Calls getMessage and displays message", async () => {
    // mock the API call
    const mockMessage = "Hello from the db!";
    getMessage.mockResolvedValueOnce({ text: mockMessage });
    const wrapper = mount(MessageDisplay);
    // wait for promise to resolve
    await flushPromises();
    // check that call happened once
    expect(getMessage).toHaveBeenCalledTimes(1);
    // check that component displays message
    const message = wrapper.find('[data-testid="message"]').text();
    expect(message).toEqual(mockMessage);
  });
  it("displays an error when getMessage call falls", async () => {
    // mock the API call
    const mockError = "OOps something went wrong";
    getMessage.mockRejectedValueOnce(mockError);
    const wrapper = mount(MessageDisplay);
    // wait for promise to resolve
    await flushPromises();
    // check that call happened once
    expect(getMessage).toHaveBeenCalledTimes(1);
    // check that component displays message
    const displayedError = wrapper.find('[data-testid="message-error"]').text();
    expect(displayedError).toEqual(mockError);
  });
});

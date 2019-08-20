import Sample from "./index";

describe("<Sample />", () => {
  test("should have the correct initialization state and two lines", () => {
    const wrapper = mount(<Sample />);
    expect(wrapper.state().loading).toBe(true);

    const heading = wrapper.find(".heading");
    expect(heading.length).toBe(1);

    const p = wrapper.find(".para");
    expect(p.length).toBe(1);
  });

  test("should have the exact test", () => {
    const wrapper = mount(<Sample />);

    const heading = wrapper.find(".heading");
    expect(heading.text()).toBe("Eightfold's UI starts here");

    const p = wrapper.find(".para");
    expect(p.text()).toBe(
      "Welcome to the React, Express, Webpack powered app."
    );
  });
});

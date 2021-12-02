import Header from "./Header";
import { shallow } from "enzyme";

test("should render correct heading", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find("div").text()).toEqual(
    "FED React : Assignment7 : Multiple Components, JSON"
  );
});

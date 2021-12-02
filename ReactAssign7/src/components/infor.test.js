import Info from "./Info";
import { shallow } from "enzyme";

test("Info should have 4 songs", () => {
  const wrapper = shallow(<Info />);
  expect(wrapper.find("div").length).toEqual(3);
});

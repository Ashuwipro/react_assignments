import App from "./App";
import { shallow } from "enzyme";

//testing main app
test("should render correctly", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});

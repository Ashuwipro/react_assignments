import AddDisplayForm from "./AddDisplayForm";
import { shallow } from "enzyme";

test("should render song List", () => {
  const song = [
    { id: 1, movie: "abc", title: "ewsd", songLength: "4:55", singer: "qwsd" },
  ];

  const wrapper = shallow(
    <AddDisplayForm list={song} sendDataToParent={() => {}} />
  );
  expect(wrapper.find(`div[className='head']`).exists);
});

test("song list second heading should be Title", () => {
  const song = [
    { id: 1, movie: "abc", title: "ewsd", songLength: "4:55", singer: "qwsd" },
  ];

  const wrapper = shallow(
    <AddDisplayForm list={song} sendDataToParent={() => {}} />
  );

  const table = wrapper.find("table");
  const thead = table.find("thead");
  const rows = thead.find("tr");
  const th = rows.find("th");
  expect(th.at(1).text()).toEqual("Title");
});

test("song list fourth heading should be Singer", () => {
  const song = [
    { id: 1, movie: "abc", title: "ewsd", songLength: "4:55", singer: "qwsd" },
  ];

  const wrapper = shallow(
    <AddDisplayForm list={song} sendDataToParent={() => {}} />
  );

  //testing song table headings
  const table = wrapper.find("table");
  const thead = table.find("thead");
  const rows = thead.find("tr");
  const th = rows.find("th");
  expect(th.at(3).text()).toEqual("Singer");
});

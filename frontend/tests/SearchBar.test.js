/*
*   Tests for proper function of SearchBar.js
*/

import SearchBar from "../components/SearchBar";
import { shallow, render, mount } from "enzyme";

const fakeCategories = [
  { name: "All", id: 0 },
  { name: "Books", id: 1 },
  { name: "Furniture", id: 2 }
];

describe("SearchBar component", () => {
  it("renders without props", () => {
    expect(() => render(<SearchBar />)).not.toThrow();
  });
  it("renders with categories", () => {
    const wrapper = shallow(<SearchBar categories={fakeCategories} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("can be passed a default category selection", () => {
    const wrapper = shallow(
      <SearchBar
        categories={fakeCategories}
        defaultCategory={fakeCategories[2]}
      />
    );
    expect(wrapper.state("categoryId")).toBe(fakeCategories[2].id);
  });
  it("will set the default category selection to the first element otherwise", () => {
    const wrapper = shallow(<SearchBar categories={fakeCategories} />);
    expect(wrapper.state("categoryId")).toBe(fakeCategories[0].id);
  });
  it("calls prop-provided method onSearch", () => {
    const handleSearch = jest.fn();
    const wrapper = mount(
      <SearchBar
        categories={fakeCategories}
        onSearch={handleSearch}
        defaultQuery={"heyo"}
      />
    );
    expect(wrapper.find("form").exists()).toBe(true);
    const form = wrapper.find("form").first();
    form.simulate("submit");
    expect(handleSearch.mock.calls[0][0]).toBe(0);
    expect(handleSearch.mock.calls[0][1]).toBe("heyo");
  });
  it("can be passed initial selections", () => {
    const wrapper = shallow(
      <SearchBar
        categories={fakeCategories}
        defaultCategory={fakeCategories[1]}
        defaultQuery="shoes"
      />
    );
    expect(wrapper.state("query")).toBe("shoes");
    expect(wrapper.state("categoryId")).toBe(fakeCategories[1].id);
  });
});

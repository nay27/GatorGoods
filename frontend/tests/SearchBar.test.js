import SearchBar from "../components/SearchBar";
import { shallow, render, mount } from "enzyme";

const fakeCategories = [
  { name: "All", value: 0 },
  { name: "Books", value: 1 },
  { name: "Furniture", value: 2 }
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
      <SearchBar categories={fakeCategories} defaultCategory={2} />
    );
    expect(wrapper.state("category")).toBe(2);
  });
  it("will set the default category selection to the first element otherwise", () => {
    const wrapper = shallow(<SearchBar categories={fakeCategories} />);
    expect(wrapper.state("category")).toBe(fakeCategories[0].value);
  });
  it("calls prop-provided method onSearch", () => {
    const handleSearch = jest.fn();
    const wrapper = mount(
      <SearchBar categories={fakeCategories} onSearch={handleSearch} />
    );
    expect(wrapper.find("form").exists()).toBe(true);
    const form = wrapper.find("form").first();
    form.simulate("submit");
    expect(handleSearch.mock.calls[0][0]).toBe(0);
  });
  it("can be passed initial selections", () => {
    const wrapper = shallow(
      <SearchBar
        categories={fakeCategories}
        defaultCategory={1}
        defaultQuery="shoes"
      />
    );
    expect(wrapper.state("query")).toBe("shoes");
    expect(wrapper.state("category")).toBe(1);
  });
});

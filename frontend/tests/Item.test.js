import { shallow } from "enzyme";
import Item from "../components/Item";

describe("Item component", () => {
  it("matches snapshot", () => {
    const item = {
      title: "Boots",
      price: 1200,
      category: 1,
      image: "/a.png",
      description: "Some boots"
    };
    const wrapper = shallow(<Item item={item} />);
    expect(wrapper).toMatchSnapshot();
  });
});

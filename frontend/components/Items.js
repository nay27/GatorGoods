import styled from "styled-components";
import Item from "./Item";

// a set of fake items to use until the backend is implemented
export const fakeItems = [
  {
    id: 1,
    title: "Air Jordan 4 Retro",
    description:
      "Brand new Air Jordan 4 Retro in black. Never worn. Size 10.5. ",
    price: 29000,
    category: 2,
    image: "/static/images/shoes.jpg"
  },
  {
    id: 2,
    title: "Bread",
    description: "Une baguette de qualité",
    price: 500,
    category: 1,
    image: "/static/images/bread.jpg"
  },
  {
    id: 3,
    title: "Desk",
    description: `A clean and simple look that fits just about anywhere. You can combine it with other desks or drawer units in the UNBELIEVABLE series to extend your work space. The clever design at the back hides messy cables.
                  Size is 28 3/4x19 5/8 "`,
    price: 2600,
    category: 3,
    image: "/static/images/desk.jpg"
  },
  {
    id: 4,
    title: "IPhone XS ",
    description:
      "Used IPhone XS in space grey. 256 GB memory. Working condition: Minor cosmetic scratches",
    price: 50000,
    category: 4,
    image: "/static/images/phone.jpg"
  },
  {
    id: 5,
    title: "Northface Jacket",
    description: "Great jacket for the californian winter",
    price: 2026,
    category: 2,
    image: "/static/images/jacket.jpg"
  }
];

const ItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  @media (min-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  }
`;

const apiResponse = Promise.resolve(fakeItems);

class Items extends React.Component {
  state = {
    loading: false,
    items: null,
    error: null
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const items = await apiResponse;
    this.setState({ loading: false, items: items });
  }
  render() {
    return (
      <>
        <h2 className="ml-3">Recent Items</h2>
        <ItemsWrapper>
          {this.state.loading && <p>Loading...</p>}
          {this.state.items &&
            this.state.items.map(item => <Item item={item} key={item.id} />)}
        </ItemsWrapper>
      </>
    );
  }
}

export default Items;

import styled from "styled-components";
import Item from "./Item";

const fakeItems = [
  {
    id: 1,
    title: "Shoes",
    description: "Some old sneakers",
    price: 1200,
    category: 2,
    image: "/static/images/shoes.jpg"
  },
  {
    id: 2,
    title: "Bread",
    description: "Une baguette de qualité",
    price: 5000,
    category: 1,
    image: "/static/images/bread.jpg"
  },
  {
    id: 3,
    title: "Desk",
    description: `This is gonna be a long description. 
    I need a long description so that I can see if my css is working 
    properly. The css for this page has been kind complicated so I really really hope this works.
    Again, just a long description, please move on. 
    Yay! it works as expected`,
    price: 2600,
    category: 3,
    image: "/static/images/desk.jpg"
  },
  {
    id: 4,
    title: "Phone",
    description: "idk what phone",
    price: 50000,
    category: 4,
    image: "/static/images/phone.jpg"
  },
  {
    id: 5,
    title: "Jacket",
    description: "a clothing item",
    price: 2026,
    category: 2,
    image: "/static/images/jacket.jpg"
  }
];

const ItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
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
      <ItemsWrapper>
        {this.state.loading && <p>Loading...</p>}
        {this.state.items &&
          this.state.items.map(item => <Item item={item} key={item.id} />)}
      </ItemsWrapper>
    );
  }
}

export default Items;

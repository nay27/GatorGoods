import styled from "styled-components";
import Item from "./Item";

const fakeItems = [
  {
    title: "Shoes",
    description: "Some old sneakers",
    price: 1200,
    category: 2,
    image: "/static/images/shoes.jpg"
  },
  {
    title: "Bio 100 Book",
    description: "Book needed for bio 100",
    price: 5000,
    category: 1,
    image: "/static/images/sticker_logo.png"
  },
  {
    title: "Desk",
    description: "My old desk",
    price: 2600,
    category: 3,
    image: "/static/images/sticker_logo.png"
  },
  {
    title: "Phone",
    description: "idk what phone",
    price: 50000,
    category: 4,
    image: "/static/images/sticker_logo.png"
  },
  {
    title: "Jacket",
    description: "a clothing item",
    price: 2000,
    category: 2,
    image: "/static/images/sticker_logo.png"
  }
];

const ItemsWrapper = styled.div`
  display: grid;

  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
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
      <ItemsWrapper>
        {this.state.loading && <p>Loading...</p>}
        {this.state.items && this.state.items.map(item => <Item item={item} />)}
      </ItemsWrapper>
    );
  }
}

export default Items;

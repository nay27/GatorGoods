import styled from "styled-components";
import Item from "./Item";
import { formatPrice } from "../utils";


const fakeItem = {
    id: 0,
    title: "Shoes",
    description: "Some old sneakers",
    price: 1200,
    category: 2,
    image: "/static/images/shoes.jpg"
}

const apiResponse = Promise.resolve(fakeItem);

class ItemDetail extends React.Component {
  state = {
    loading: false,
    item: null,
    error: null
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const item = await apiResponse;
    this.setState({ loading: false, item: item });
  }
  render() {
    return (
      <div>
        <h1>
          {this.state.loading && <p>Loading...</p>}
          {this.state.item && this.state.item.title}
        </h1>

        <img
                  src={this.state.item && this.state.item.image}
                  alt={this.state.item && this.state.item.title}
                  >
        </img>
        <p>
        <p>{formatPrice(this.state.item &&this.state.item.price)}
            <button>Contact Seller</button>
        </p>
          {this.state.item && this.state.item.description}
        </p>
      </div>
    );
  }
}

export default ItemDetail;

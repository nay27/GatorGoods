import styled from "styled-components";
import { formatPrice } from "../utils";
import { fakeItems } from "./Items";

class ItemDetail extends React.Component {
  state = {
    loading: false,
    item: null,
    error: null
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const params = (new URL(document.location)).searchParams;
    const id = parseInt(params.get("id"));
    const item = fakeItems.filter(item => item.id === id);
    this.setState({ loading: false, item: item[0] });
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

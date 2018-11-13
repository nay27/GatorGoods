import styled from "styled-components";
import { formatPrice } from "../utils";
import { fakeItems } from "./Items";
import Link from "next/link";
import PropTypes from "prop-types";

const ItemWrapper = styled.div`
  border: 2px solid lightgray;
  box-shadow: 0 0 3px lightgray;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1rem;

  .price {
    color: green;
    font-weight: 600;
    padding-left: 0.5rem;
  }
`;

class ItemDetail extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired
  };
  state = {
    loading: false,
    item: null,
    error: null
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const item = fakeItems.filter(item => item.id === this.props.id);
    this.setState({ loading: false, item: item[0] });
  }
  render() {
    return (
      <ItemWrapper>
        <h1 align="center">{this.state.item && this.state.item.title}</h1>

        <div align="center">
          <img
            align="center"
            src={this.state.item && this.state.item.image}
            alt={this.state.item && this.state.item.title}
          />
        </div>

        <button className="btn btn-outline-primary">Contact Seller</button>

        <p>Catagory: {this.state.item && this.state.item.category}</p>

        <div>
          <h6>Price: </h6>
          <p className="price" align="left">
            {formatPrice(this.state.item && this.state.item.price)}
          </p>
        </div>
        <h3>Discription: </h3>
        <p>{this.state.item && this.state.item.description}</p>
      </ItemWrapper>
    );
  }
}

export default ItemDetail;

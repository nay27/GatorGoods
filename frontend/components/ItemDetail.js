import styled from "styled-components";
import { formatPrice } from "../utils";
import { fakeItems } from "./Items";
import Link from "next/link";
import PropTypes from "prop-types";

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(100px, 400px) 1fr;
  border: 2px solid lightgray;
  box-shadow: 0 0 3px lightgray;
  border-radius: 0.5rem;
  padding: 2rem;
  margin: 1rem;

  .price {
    color: green;
    font-weight: 600;
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
        <div className="imageWrapper">
          <img
            className="img-fluid"
            src={this.state.item && this.state.item.image}
            alt={this.state.item && this.state.item.title}
          />
        </div>
        <div className="left">
          <h1>{this.state.item && this.state.item.title}</h1>
          <Link
            href={{
              pathname: "/message",
              query: { id: this.props.id }
            }}
          >
            <a className="btn btn-outline-primary">Contact Seller</a>
          </Link>
          <p>Category: {this.state.item && this.state.item.category}</p>

          <div>
            <h6>Price: </h6>
            <p className="price">
              {formatPrice(this.state.item && this.state.item.price)}
            </p>
          </div>
          <h3>Description: </h3>
          <p>{this.state.item && this.state.item.description}</p>
        </div>
      </ItemWrapper>
    );
  }
}

export default ItemDetail;

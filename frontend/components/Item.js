import styled from "styled-components";
import PropTypes from "prop-types";
import { formatPrice } from "../utils";

const ItemWrapper = styled.div`
  border: 2px solid lightgray;
  box-shadow: 0 0 3px lightgray;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1rem;

  /* on small screens, show elements in a single column */
  display: grid;
  grid-template-areas:
    "title"
    "image"
    "right";
  text-align: center;
  justify-content: center;

  /* on larger screens, show items with image on the left */
  @media (min-width: 600px) {
    text-align: left;
    grid-template-columns: minmax(100px, 400px) 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "image title"
      "image right";
  }

  .title {
    grid-area: title;
  }

  .right {
    display: flex;
    flex-direction: column;
    width: 100%;
    grid-area: right;
  }

  .image-wrapper {
    /* width: 100px; */
    margin: auto 0.5rem;
    flex: initial;
    grid-area: image;
  }

  .price {
    color: green;
    font-weight: 600;
    padding-left: 0.5rem;
  }

  .horizontal {
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    p {
      margin: 0;
    }
  }
`;

const Item = props => (
  <ItemWrapper>
    <h3 className="title">{props.item.title}</h3>
    <div className="image-wrapper">
      <img
        src={props.item.image}
        alt={props.item.title}
        className="img-fluid"
      />
    </div>
    <div className="right">
      <small>category: {props.item.category}</small>
      <p>{props.item.description}</p>
      <div className="horizontal">
        <button className="btn btn-outline-primary">Contact Seller</button>
        <p className="price">{formatPrice(props.item.price)}</p>
      </div>
    </div>
  </ItemWrapper>
);

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.description,
    category: PropTypes.number,
    image: PropTypes.string
  }).isRequired
};

export default Item;

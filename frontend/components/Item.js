/*
*   Ensures that item information is fully loaded and
*   Stylizes how page displays information on small and large screens
*/

import styled from "styled-components";
import Link from "next/link";
import PropTypes from "prop-types";
import { formatPrice } from "../utils";

const ItemWrapper = styled.div`
  border: 2px solid lightgray;
  box-shadow: ${props => props.theme.cardBS};
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
    grid-template-columns: minmax(100px, 200px) 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "image title"
      "image right";
  }

  .title {
    grid-area: title;
    font-size: 1.5rem;
  }

  a:hover {
    text-decoration: none;
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
    font-size: 1.2rem;
  }

  .contact {
    width: 90%;
  }
`;

const Item = props => (
  <ItemWrapper>
    <Link
      href={{
        pathname: "/items",
        query: { id: props.item.id }
      }}
    >
      <a className="title" target="_blank">
        {props.item.title}
      </a>
    </Link>
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
      <p className="price">{formatPrice(props.item.price)}</p>
      <Link
        href={{
          pathname: "/message",
          query: { id: props.item.id }
        }}
      >
        <a className="btn btn-outline-primary contact">Contact Seller</a>
      </Link>
    </div>
  </ItemWrapper>
);

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.description,
    category: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string
  }).isRequired
};

export default Item;

import styled from "styled-components";
import Link from "next/link";

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  border: 2px solid black;
  border-radius: 0.2rem;
  padding: 1rem;
  margin: 1rem;
`;

const Item = props => (
  <ItemWrapper>
    <img src={props.item.image} alt={props.item.title} height="100px" />
    <Link href= {"/items?id=" + props.item.id} >
    <div>
      <h1>{props.item.title}</h1>
      <p>{props.item.description}</p>
      <p>{props.item.price}</p>
      <p>{props.item.category}</p>
    </div>
    </Link>
  </ItemWrapper>
);

export default Item;

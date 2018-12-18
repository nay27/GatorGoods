/*
*   GatorGoods Greeting for home/search page
*/

import styled from "styled-components";

const Wrapper = styled.div`
  margin: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  background-color: #eee;
  padding: 1rem;
  box-shadow: ${props => props.theme.cardBS};
`;

const Greeting = () => (
  <Wrapper>
    <h1>Welcome to GatorGoods</h1>
    <h5>A website for SFSU students to sell and buy items.</h5>
  </Wrapper>
);

export default Greeting;

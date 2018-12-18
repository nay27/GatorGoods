/*
*   Used to create grid display for posts
*   Grid adjusts with window size
*/

import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
  justify-items: center;
  grid-gap: 2rem;
  width: 100%;
`;

export default Grid;

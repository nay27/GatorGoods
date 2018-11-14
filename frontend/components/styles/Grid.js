import styled from "styled-components";

const Grid = styled.div `
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
  grid-gap: 2rem;
`;

export default Grid;
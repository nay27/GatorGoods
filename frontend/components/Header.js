import styled from "styled-components";
import Nav from "./Nav";

const Disclaimer = styled.header`
  text-align: center;
  background-color: red;
  color: white;
`;

export default () => (
  <header className="sticky-top">
    <Disclaimer>
      <em>
        SFSU-Fulda Software Engineering Project CSC 648-848, Fall 2018. For
        Demonstration Only
      </em>
    </Disclaimer>
    <Nav />
  </header>
);

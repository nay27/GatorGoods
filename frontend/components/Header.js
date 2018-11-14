import styled from "styled-components";
import Nav from "./Nav";

const Disclaimer = styled.header`
  text-align: center;
  background-color: ${props => props.theme.yellow};
  color: white;
`;

const Sticky = styled.header`
  position: sticky;
  top: 0;
`;

const Header = props => (
  <Sticky className="sticky-top">
    <Disclaimer>
      <em>
        SFSU-Fulda Software Engineering Project CSC 648-848, Fall 2018. For
        Demonstration Only
      </em>
    </Disclaimer>
    <Nav category={props.query.category} query={props.query.query} />
  </Sticky>
);

export default Header;

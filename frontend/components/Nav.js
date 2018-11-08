import styled from "styled-components";
import Link from "next/link";
import SearchBar from "./SearchBar";

const NavWrapper = styled.nav`
  background-color: ${props => props.theme.purple};
  color: #eeeeee;
  margin-bottom: 2rem;
  padding: 1rem;

  h1 {
    margin: 0;
  }

  .nav-grid {
    display: grid;
    justify-items: center;
  }

  .links {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 0;
    margin-bottom: 0;
    height: 100%;
  }

  .links a {
    padding: 0.5rem;
    color: #eeeeee;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.2s;
  }

  .links a:hover {
    background-color: ${props => props.theme.yellow};
    color: #eeeeee;
    text-decoration: none;
  }

  @media (min-width: 800px) {
    .nav-grid {
      grid-template-columns: repeat(3, auto);
      justify-content: space-between;
    }

    .links {
      justify-content: flex-end;
    }
  }
`;

const categories = [{ name: "All", value: 1 }, { name: "Books", value: 2 }];

const Nav = props => (
  <NavWrapper>
    <div className="nav-grid">
      <Link href="/">
        <img
          src="/static/images/sticker_logo.png"
          alt="Gator Goods Logo"
          height="50px"
        />
      </Link>
      <SearchBar
        categories={categories}
        defaultCategory={props.category}
        defaultQuery={props.query}
      />
      <ul className="links">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/sell">
            <a>Sell</a>
          </Link>
        </li>
      </ul>
    </div>
  </NavWrapper>
);

export default Nav;

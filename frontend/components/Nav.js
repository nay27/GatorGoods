/*
*   Navigation bar at top of page
*   Present on every page of GatorGoods
*/

import styled from "styled-components";
import Link from "next/link";
import Router from "next/router";
import api from "../api";
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
    justify-content: center;
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
    font-weight: 600;
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
      align-items: center;
    }

    .links {
      justify-content: flex-end;
      font-size: 1.2rem;
    }
  }

  .image {
    margin-bottom: 0.5rem;
  }
`;

const defaultCategory = { name: "All", id: null };

class Nav extends React.Component {
  state = {
    categories: null
  };
  async componentDidMount() {
    const res = await api("/categories");
    const data = await res.json();
    this.setState({ categories: [defaultCategory, ...data.results] });
  }
  render() {
    return (
      <NavWrapper>
        <div className="nav-grid">
          <Link href="/">
            <img
              src="/static/images/sticker_logo.png"
              alt="Gator Goods Logo"
              height="50px"
              className="image"
            />
          </Link>
          <SearchBar
            categories={this.state.categories}
            defaultCategory={this.props.category}
            defaultQuery={this.props.query}
            onSearch={(category, query) =>
              Router.push({
                pathname: "/items",
                query: {
                  category,
                  query
                }
              })
            }
          />
          <ul className="links">
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
            <li>
              <Link href="/signin">
                <a>Sign in</a>
              </Link>
            </li>
          </ul>
        </div>
      </NavWrapper>
    );
  }
}

export default Nav;

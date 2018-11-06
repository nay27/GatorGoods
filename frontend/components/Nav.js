import styled from "styled-components";
import Link from "next/link";

const NavWrapper = styled.nav`
    background-color: #231161;
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
  background-color: #c99700;
  color: #eeeeee;
  text-decoration: none;
}

@media (min-width: 800px) {
  .nav-grid {
    grid-template-columns: auto 1fr;
    justify-items: unset;
  }

  .links {
    justify-content: flex-end;
  }
}
`;

const Nav = props => (
    <NavWrapper>
        <div className="nav-grid">
            <Link href="/">
            <img src="/static/images/sticker_logo.png" alt="Gator Goods Logo" height="50px"/>
            </Link>
            <ul className="links">
                <li><Link href="/"><a>Home</a></Link></li>
                <li><Link href="/about"><a>About</a></Link></li>
                <li><Link href="/sell"><a>Sell</a></Link></li>
            </ul>
        </div>
    </NavWrapper>
);

export default Nav;
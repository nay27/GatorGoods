import styled from "styled-components";
import Item from "./Item";
import apiFactory from "../api.js";

const ItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  @media (min-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  }
`;

class Items extends React.Component {
  state = {
    loading: false,
    items: null,
    error: null
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const api = apiFactory(fetch);
    const res = await api("/items/");
    const data = await res.json();
    const categoryUrls = new Set(data.results.map(item => item.category));
    this.setState({ loading: false, items: data.results });
    categoryUrls.forEach(async url => {
      const res = await fetch(url);
      const data = await res.json();
      const { name: categoryName } = data;
      this.setState(prevState => {
        const withCategory = prevState.items.map(item => {
          if (item.category === url) {
            return { ...item, category: categoryName };
          } else {
            return item;
          }
        });
        return { items: withCategory };
      });
    });
  }
  render() {
    return (
      <>
        <h2 className="ml-3">Recent Items</h2>
        <ItemsWrapper>
          {this.state.loading && <p>Loading...</p>}
          {this.state.items &&
            this.state.items.map(item => <Item item={item} key={item.id} />)}
        </ItemsWrapper>
      </>
    );
  }
}

export default Items;

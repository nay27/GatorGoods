import styled from "styled-components";
import Item from "./Item";
import PaginationProvider from "./PaginationProvider";
import PageInfo from "./PageInfo";

const ItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  @media (min-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  }
`;

class Items extends React.Component {
  render() {
    return (
      <PaginationProvider resource="/items">
        {info => (
          <>
            <h2 className="ml-3">Recent Items</h2>
            <ItemsWrapper>
              {info.loading && <p>Loading...</p>}
              {info.data &&
                info.data.map(item => <Item item={item} key={item.id} />)}
            </ItemsWrapper>
            <PageInfo {...info} />
          </>
        )}
      </PaginationProvider>
    );
  }
}

export default Items;

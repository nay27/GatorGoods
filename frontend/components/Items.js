/*
*   Sorts item posts by various ordering options
*   Ascending/Descending price, oldest/newest items
*/

import styled from "styled-components";
import { withRouter } from "next/router";
import Item from "./Item";
import PaginationProvider from "./PaginationProvider";
import PageInfo from "./PageInfo";
import { CategoryContext } from "./CategoriesProvider";
import Dropdown from "./Dropdown";

const ItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  @media (min-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  }
`;

const BlockLabel = styled.label`
  display: block;
`;

const orderingOptions = [
  { name: "Price: Low to High", value: "+price" },
  { name: "Price: High to Low", value: "-price" },
  { name: "Newest", value: "-modified" },
  { name: "Oldest", value: "+modified" }
];

class Items extends React.Component {
  state = {
    currentOrdering: "-modified"
  };
  handleOrderingChange = newValue => {
    this.setState({ currentOrdering: newValue });
  };
  render() {
    const {
      router: { query }
    } = this.props;
    return (
      <PaginationProvider
        resource={
          query && !!(query.query || query.category)
            ? `/search?search=${query.query}&category=${query.category}`
            : "/items"
        }
        ifNone="/items"
        ordering={this.state.currentOrdering}
      >
        {info => (
          <>
            <div className="ml-3">
              <h2>{query.query ? "Search Results" : "Recent Items"}</h2>
              {info.ifNoneCalled ? (
                <strong>
                  No results found for "{query.query}
                  ". Showing {info.count} recent item(s) below
                </strong>
              ) : (
                <small>Showing {info.count} item(s)</small>
              )}
              <BlockLabel>
                Sort:
                <Dropdown
                  options={orderingOptions}
                  defaultSelection="-modified"
                  onChange={this.handleOrderingChange}
                />
              </BlockLabel>
            </div>
            <ItemsWrapper>
              <CategoryContext.Consumer>
                {context => (
                  <>
                    {info.loading && <p>Loading...</p>}
                    {info.data &&
                      info.data.map(item => {
                        const category = context.getCategory(item.category);
                        const categoryName =
                          category && "name" in category
                            ? category.name
                            : "unknown";
                        return (
                          <Item
                            item={{ ...item, category: categoryName }}
                            key={item.id}
                          />
                        );
                      })}
                  </>
                )}
              </CategoryContext.Consumer>
            </ItemsWrapper>
            <PageInfo {...info} />
          </>
        )}
      </PaginationProvider>
    );
  }
}

export default withRouter(Items);

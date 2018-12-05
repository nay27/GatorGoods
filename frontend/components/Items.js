import styled from "styled-components";
import { withRouter } from "next/router";
import Item from "./Item";
import PaginationProvider from "./PaginationProvider";
import PageInfo from "./PageInfo";
import { CategoryContext } from "./CategoriesProvider";

const ItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  @media (min-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  }
`;

class Items extends React.Component {
  render() {
    const {
      router: { query }
    } = this.props;
    return (
      <PaginationProvider
        resource={
          query && query.query
            ? `/search?search=${query.query}&category=${query.category}`
            : "/items"
        }
      >
        {info => (
          <>
            <div className="ml-3">
              <h2>{query.query ? "Search Results" : "Recent Items"}</h2>
              <small>Showing {info.count} item(s)</small>
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

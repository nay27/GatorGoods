/*
*   Loads categories to frontend page from backend database
*/

import React from "react";
import { getCategories, categoryIdFromUrl } from "../api";

export const CategoryContext = React.createContext({
  cache: [],
  getCategory: id => "loading"
});

class CategoriesProvider extends React.Component {
  state = {
    categories: []
  };
  getCategory = id => {
    if (this.state.categories.length == 0) return "loading";
    if (typeof id === "string") {
      id = categoryIdFromUrl(id);
    }
    const category = this.state.categories.find(c => c.id === id);
    return category;
  };
  async componentDidMount() {
    const categories = await getCategories();
    this.setState({ categories });
  }
  render() {
    return (
      <CategoryContext.Provider
        value={{
          getCategory: this.getCategory,
          cache: this.state.categories
        }}
      >
        {this.props.children}
      </CategoryContext.Provider>
    );
  }
}

export default CategoriesProvider;

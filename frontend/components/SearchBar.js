import styled from "styled-components";
import PropTypes from "prop-types";
import Router from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Form = styled.form`
  button {
    background-color: ${props => props.theme.yellow};
  }
`;

const stateFromProps = props => {
  return {
    categoryId: props.defaultCategory
      ? props.defaultCategory.id
      : props.categories && props.categories[0].id,
    query: props.defaultQuery || ""
  };
};
class SearchBar extends React.Component {
  state = stateFromProps(this.props);
  handleChange = e => {
    if (e.target.name === "category") {
      this.setState({ categoryId: parseInt(e.target.value) });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    // call the function that the parent provided, inversion of control
    this.props.onSearch(this.state.categoryId, this.state.query);
  };
  componentDidMount() {
    // reset selection on route changes
    Router.events.on("routeChangeComplete", this.handleRouteChange);
  }
  componentWillUnmount() {
    Router.events.off("routeChangeComplete", this.handleRouteChange);
  }
  handleRouteChange = url => {
    this.setState(stateFromProps(this.props));
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <select
              className="custom-select"
              id="category-select"
              name="category"
              value={this.state.category}
              onChange={this.handleChange}
            >
              {this.props.categories &&
                this.props.categories.map(category => (
                  <option
                    className="dropdown-item"
                    value={category.id}
                    key={category.id}
                  >
                    {category.name}
                  </option>
                ))}
            </select>
          </div>
          <input
            type="text"
            id="search-input"
            name="query"
            className="form-control"
            placeholder="Search for an item..."
            value={this.state.query}
            onChange={this.handleChange}
            pattern="^[^-~+=@#^&*\\`]{0,40}$"
            title="Your query contains invalid characters"
          />
          <div className="input-group-append">
            <button className="btn btn-outline" type="submit">
              <FontAwesomeIcon icon={faSearch} fixedWidth />
            </button>
          </div>
        </div>
      </Form>
    );
  }
}

SearchBar.propTypes = {
  categories: PropTypes.array,
  onSearch: PropTypes.func
};

export default SearchBar;

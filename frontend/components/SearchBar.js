import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Form = styled.form`
  button {
    background-color: ${props => props.theme.yellow};
  }
`;

class SearchBar extends React.Component {
  state = {
    category:
      this.props.defaultCategory ||
      (this.props.categories && this.props.categories[0].value),
    query: this.props.defaultQuery || ""
  };
  handleChange = e => {
    console.log(e);
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.category);
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
                    value={category.value}
                    key={category.value}
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

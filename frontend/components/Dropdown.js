import React from "react";
import PropTypes from "prop-types";

/**
 * A simple wrapper around <select> to provide a nicer React api.
 */
class Dropdown extends React.Component {
  static propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
      })
    ).isRequired,
    onChange: PropTypes.func,
    defaultSelection: PropTypes.string
  };
  handleChange = e => {
    if (this.props.onChange) {
      this.props.onChange(e.target.value);
    }
  };
  render() {
    return (
      <select
        onChange={this.handleChange}
        defaultValue={this.props.defaultSelection}
      >
        {this.props.options.map(option => {
          return (
            <option value={option.value} key={`${option.value}+${option.name}`}>
              {option.name}
            </option>
          );
        })}
      </select>
    );
  }
}

export default Dropdown;

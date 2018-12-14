import React from "react";
import PropTypes from "prop-types";
import api from "../api";

/**
 * This component uses some more advanced concepts of React, I'll try to summarize here,
 * but this is by no means comprehensive and you should read more about Component Lifecycle
 * Methods and Render Props to gain a better understanding.
 *
 * Public API for this component:
 * If you look at the render method, you can see that the only thing this component does
 * rendering-wise is return the results of calling `this.props.children`. Children is a
 * special prop in React, it is whatever is in between the start tag and end tag of your
 * component. For example, if we rendered <PaginationProvider><p>hi</p></PaginationProvider>,
 * the `children` prop in `PaginationProvider` would be `<p>hi</p>`. We take advantage of this
 * by instead passing a function. This way, PaginationProvider can provide functionality to
 * it's children without needing to know the structure of it's children.
 *
 * The easy way to use this component is to pass the info from the render prop function to
 * `PageInfo`. This component also needs to be passed a `resource` prop which should be the
 * endpoint you are trying to access such as `/items` (note: you do not need to provide the
 * hostname as this is provided by the api module). An optional `ifNone` prop can be passed
 * with a similar format to `resource` which will be requested if there are no results
 * returned from the origial query.
 *
 */
class PaginationProvider extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    resource: PropTypes.string.isRequired,
    ifNone: PropTypes.string,
    ordering: PropTypes.string
  };
  state = {
    hasNextPage: false,
    hasPrevPage: false,
    nextPage: null,
    prevPage: null,
    data: null,
    currPage: 1,
    loading: false,
    count: 0,
    ifNoneCalled: false
  };
  async componentDidMount() {
    await this.setup();
  }
  async componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      await this.setup();
    }
  }
  setup = async () => {
    this.setState({ loading: true });
    const url = this._withOrdering(this.props.resource);
    const res = await api(url);
    const json = await res.json();
    const data = await this.callAlternativeIfNeeded(json);
    this.setStateWithResults(data);
  };
  callAlternativeIfNeeded = async data => {
    if (!this.props.ifNone) return data;
    if (data.count && data.count > 0) return data;
    const res = await api(this._withOrdering(this.props.ifNone));
    const newData = await res.json();
    return { ...newData, ifNoneCalled: true };
  };
  _withOrdering = root => {
    if (this.props.ordering) {
      // check if there is already url search param(s)
      const divider = root.includes("?") ? "&" : "?";
      return `${root}${divider}ordering=${this.props.ordering}`;
    }
    return root;
  };
  setStateWithResults = data => {
    const { next, previous, count, results, ifNoneCalled = false } = data;
    this.setState({
      count,
      data: results,
      nextPage: next,
      prevPage: previous,
      currPage: 1,
      loading: false,
      hasNextPage: next !== null,
      hasPrevPage: previous !== null,
      ifNoneCalled
    });
  };
  nextPage = async () => {
    if (this.state.hasNextPage) {
      const url = this.state.nextPage;
      const res = await fetch(url);
      const json = await res.json();
      this.setStateWithResults(json);
    }
  };
  prevPage = async () => {
    if (this.state.hasPrevPage) {
      const url = this.state.prevPage;
      const res = await fetch(url);
      const json = await res.json();
      this.setStateWithResults(json);
    }
  };
  render() {
    const {
      count,
      hasNextPage,
      hasPrevPage,
      data,
      loading,
      currPage,
      ifNoneCalled
    } = this.state;
    return this.props.children({
      count,
      hasNextPage,
      hasPrevPage,
      data,
      loading,
      currPage,
      nextPage: this.nextPage,
      prevPage: this.prevPage,
      ifNoneCalled
    });
  }
}

export default PaginationProvider;

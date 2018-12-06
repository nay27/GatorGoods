import styled from "styled-components";
import Router from "next/router";
import Centered from "./styles/Centered";
import Form from "./styles/Form";
import api from "../api";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem;
  margin-left: 0;
`;

class Message extends React.Component {
  state = {
    loading: false,
    item: null,
    error: null
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const itemRes = await api(`/items/${this.props.id}`);
    const item = await itemRes.json();
    this.setState({ loading: false, item });
  }
  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <Centered>
        <Form method="POST" onSubmit={this.handleSubmit}>
          <h1>
            {this.state.loading && <p>Loading...</p>}
            {this.state.item && this.state.item.title}
          </h1>
          <fieldset>
            <strong>Send a message to seller</strong>
            <label htmlFor="message">
              Message
              <textarea
                type="text"
                name="message"
                placeholder="Enter a question about the item..."
              />
            </label>
            <label htmlFor="location">
              Select an optional exchange location:
              <select name="location" width="100px">
                <option value="Select Location">Select Location</option>
                <option value="lib">Library</option>
                <option value="quad">Quad</option>
                <option value="opt2">...</option>
              </select>
            </label>
            <Row>
              <button
                className="btn btn-danger mr-3"
                onClick={() => Router.back()}
              >
                Cancel
              </button>
              <button type="submit">Send</button>
            </Row>
          </fieldset>
        </Form>
      </Centered>
    );
  }
}

export default Message;

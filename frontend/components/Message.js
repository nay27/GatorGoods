/*
*   Component for messaging seller about specific item
*   Loads item title into message box
*/

import styled from "styled-components";
import Router from "next/router";
import Centered from "./styles/Centered";
import Form from "./styles/Form";
import api from "../api";
import SuccessMessage from "./styles/Message";

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
    error: null,
    successMessage: null
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const itemRes = await api(`/items/${this.props.id}`);
    const item = await itemRes.json();
    this.setState({ loading: false, item });
  }
  handleSubmit = e => {
    e.preventDefault();
    this.setState(
      { successMessage: "Messeage Sent!" }
    )
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
                <option>Select Location</option>
                <option>Library</option>
                <option>Quad</option>
                <option>Thorton Hall</option>
                <option>HSS</option>
                <option>Cafe Rosso</option>
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
          {this.state.successMessage && (
          <SuccessMessage>{this.state.successMessage}</SuccessMessage>
        )}
        </Form>
      </Centered>
    );
  }
}

export default Message;

import styled from "styled-components";
import Router from "next/router";
import Item from "./Item";
import Form from "./styles/Form";
import { fakeItems } from "./Items";

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
    const params = new URL(document.location).searchParams;
    const id = parseInt(params.get("id"));
    const item = fakeItems.filter(item => item.id === id);
    this.setState({ loading: false, item: item[0] });
  }
  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <h3>
          {this.state.loading && <p>Loading...</p>}
          {this.state.item && this.state.item.title}
        </h3>
        <Form method="POST" onSubmit={this.handleSubmit}>
          <fieldset>
            <h3>Send a message to seller</h3>
            <label htmlFor="message">
              Message
              <input type="text" name="message" />
            </label>
            <select name="Locations" width="100px">
              <option value="Select Location">Select Location</option>
              <option value="lib">Library</option>
              <option value="quad">Quad</option>
              <option value="opt2">...</option>
            </select>
            <Row>
              <button class="btn btn-danger mr-3" onClick={() => Router.back()}>
                Cancel
              </button>
              <button type="submit">Send</button>
            </Row>
          </fieldset>
        </Form>
      </div>
    );
  }
}

export default Message;

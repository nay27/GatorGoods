import styled from "styled-components";
import Item from "./Item";
import { fakeItems } from "./Items";

class Message extends React.Component {
    state = {
       loading: false,
       item: null,
       error: null
     };
     async componentDidMount() {
       this.setState({ loading: true });
       const params = (new URL(document.location)).searchParams;
       const id = parseInt(params.get("id"));
       const item = fakeItems.filter(item => item.id === id);
       this.setState({ loading: false, item: item[0] });
     }
  render() {
    return (
      <div>
        <h3>
          {this.state.loading && <p>Loading...</p>}
          {this.state.item && this.state.item.title}
        </h3>
        <form>
         Your message to the seller of {this.state.item && this.state.item.title}: <br />
        <input type="text"/> <br />

        {/*Use bootstrap form?
            Its faked now since "Select Location" is a valid option
        */}

        <select name="Locations" width="100px">
            <option value="Select Location">Select Location</option>
            <option value="lib">Library</option>
            <option value="quad">Quad</option>
            <option value="opt2">...</option>
          </select>
        <br />  <br />

        <a href ="#">Cancel </a>
        <button> Send </button>
        </form>
      </div>
    );
  }
}

export default Message;
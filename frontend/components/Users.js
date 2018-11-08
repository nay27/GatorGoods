import styled from "styled-components";
import apiFactory from "../api";
import Error from "./Error";

const List = styled.ul`
  list-style: none;
`;

class Users extends React.Component {
  state = {
    loading: false,
    users: null,
    error: null
  };
  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const api = apiFactory(fetch);
      const res = await api("/users/");
      const data = await res.json();
      this.setState({ users: data.results, loading: false });
    } catch (error) {
      this.setState({ error: error, loading: false });
    }
  }
  render() {
    return (
      <>
        <h1>Users:</h1>
        {this.state.loading && <p>Loading</p>}
        <Error error={this.state.error} />
        <List>
          {this.state.users &&
            this.state.users.map(user => (
              <li key={user.id}>
                <strong>name:</strong>
                {user.username}, <strong>email:</strong> {user.email}
              </li>
            ))}
        </List>
      </>
    );
  }
}

export default Users;

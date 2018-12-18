/*
*   Shows list of users, including user information
*/

import styled from "styled-components";
import Error from "./Error";
import PaginationProvider from "./PaginationProvider";
import PageInfo from "./PageInfo";

const List = styled.ul`
  list-style: none;
`;

class Users extends React.Component {
  render() {
    return (
      <PaginationProvider resource="/users">
        {info => (
          <>
            <h1>Users:</h1>
            {info.loading && <p>Loading</p>}
            <Error error={info.error} />
            <List>
              {info.data &&
                info.data.map(user => (
                  <li key={user.id}>
                    <strong>name:</strong>
                    {user.username}, <strong>email:</strong> {user.email}
                  </li>
                ))}
            </List>
            <PageInfo {...info} />
          </>
        )}
      </PaginationProvider>
    );
  }
}

export default Users;

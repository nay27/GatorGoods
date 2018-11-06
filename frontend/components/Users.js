import { BACKEND_API_URL } from "../config";

class Users extends React.Component {
    state = {
        loading: false,
        users: null
    }
    componentDidMount() {
        this.setState({loading: true});
        fetch(`${BACKEND_API_URL}/users/`)
            .then(res => res.json())
            .then(data => console.log(data));
    }
    render() {
        return (
            <>
                { this.state.loading && <p>Loading</p> }
                { this.state.users && <p>{users.length}</p>}
            </>
        );
    }
}

export default Users;
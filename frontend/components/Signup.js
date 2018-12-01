import Form from "./styles/Form";
import Error from "./Error";
import Message from "./styles/Message";

class Signup extends React.Component {
  state = {
    email: "",
    password: "",
    confirmPassword: "",
    error: null,
    successMessage: "",
    loading: false
  };
  signin = e => {
    e.preventDefault();
    this.setState({ loading: true });
    if (
      !this.state.email ||
      !this.state.password ||
      !this.state.confirmPassword
    ) {
      this.setState({
        error: { message: "The email and/or password fields cannot be blank" },
        loading: false
      });
      return;
    }
    if (this.state.password !== this.state.confirmPassword) {
      this.setState({
        error: {
          message: "Your passwords must match"
        },
        password: "",
        confirmPassword: "",
        loading: false
      });
      return;
    }
    // fakes api call time to test ui
    this.setState({ loading: true }, () => {
      setTimeout(
        () =>
          this.setState({
            loading: false,
            email: "",
            password: "",
            confirmPassword: "",
            successMessage: "Signed in!"
          }),
        2000
      );
    });
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      error: null,
      successMessage: ""
    });
  };
  render() {
    const { loading, error } = this.state;
    return (
      <Form onSubmit={this.signin} method="POST">
        <h1>Sign up</h1>
        <Error error={this.state.error} />
        <fieldset aria-busy={loading} disabled={loading}>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              id="email"
              pattern=".+@mail.sfsu.edu"
              title= "Please use your school email address"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="confirmPassword">
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={this.state.confirmPassword}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">
            Sign
            {loading && "ing"} In
          </button>
        </fieldset>
        {this.state.successMessage && (
          <Message>{this.state.successMessage}</Message>
        )}
      </Form>
    );
  }
}

export default Signup;

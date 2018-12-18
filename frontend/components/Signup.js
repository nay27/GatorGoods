/*
Sign Up form component.
ReCaptcha is implemented in this component.
API is called to send POST request with formdata to create user.
*/

import Form from "./styles/Form";
import Error from "./Error";
import Message from "./styles/Message";
import Recaptcha from "react-recaptcha";
import api from "../api";
import Router from "next/router";

class Signup extends React.Component {
  state = {
    email: "",
    password: "",
    confirmPassword: "",
    error: null,
    successMessage: "",
    loading: false,
    terms: false,
    verified: false
  };

  signin = async function(e) {
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
    if (!this.state.terms) {
      this.setState({
        error: { message: "Please accept the terms and conditions." },
        loading: false
      });
      return;
    }
   if (!this.state.verified) {
      this.setState({
        error: { message: "Please verify that you are a human." },
        loading: false
      });
      return;
    }

    const rawdata = {
      username: this.state.email,
      password: this.state.password
    };

    const data = JSON.stringify(rawdata);
      try {
        const response = await api("/users/?format=json", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: data
    });
      if (response.ok){
        this.setState( {
          successMessage: "Account succesfully created! Redirecting to home page...",
          loading: false
        })
        const that = this;
        setTimeout(() => {
          Router.push({pathname: "/"});
        }, 2000)
      } else {
        this.setState( {
          error: { message: "Account with this email already exists." },
          loading: false
        });
      }
      } catch (e) {
          this.setState({error: e});
      }
    };
    verifyCallback = response => {
      if (response) {
        this.setState({
          verified: true
        });
      }
    };
    handleCheck = e => {
      this.setState({
        terms: !this.state.terms
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
      <Form onSubmit={this.signin.bind(this)}>
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
              title="Please use your school email address"
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

          <label htmlFor="termsCheckbox">
            <input
              type="checkbox"
              id="termsCheckbox"
              onChange={this.handleCheck}
              defaultChecked={false}
            />
            <a href="#">Terms and Conditions</a>
          </label>
          <div>
          <Recaptcha
                 sitekey="6Lcg2oAUAAAAAOy_c1QvI9vwbPgZI0_C5-XZGYSw"
                 render="explicit"
                 verifyCallback={this.verifyCallback}
            />
          </div>
          <button type="submit">
            Sign
            {loading && "ing"} Up
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

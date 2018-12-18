/*
*   Format for sell page, includes
*   Message awaiting for Moderator approval
*/


import Link from "next/link";
import styled from "styled-components";
import Router from "next/router"
import Centered from "./styles/Centered";
import Form from "./styles/Form";
import api from "../api";
import Error from "./Error";
import Message from "./styles/Message";

const ButtonWrapper = styled.div`
  .cancel {
    width: 178px;
    height: 50px;
    background-color: #ff3232;
    border-radius: 5px;
    font-weight: bold;
    color: white;
  }
  .divider {
    width: 50px;
    height: auto;
    display: inline-block;
  }
  .submit {
    padding: "20px";
    width: 178px;
    height: 50px;
    background-color: #006400 !important;
    padding: 12px;
    border-radius: 5px;
    font-weight: bold;
    color: white;
  }
`;
class Sell extends React.Component {

  state = {
    loading: false,
    title: "",
    description: "",
    price: 0,
    categoryId: 0,
    error: null,
    successMessage: null
  };

  handleChange = e => {
    if (e.target.name === "category") {
      this.setState({ categoryId: parseInt(e.target.value) });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  post = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });
    if (
      !this.state.title ||
      !this.state.description ||
      !this.state.price ||
      (!this.state.categoryId || this.state.categoryId < 1)
    ) {
      this.setState({
        error: { message: "Please enter require fields!" },
        loading: false
      });
      return;
    }
    const rawdata = {
      seller: "http://ec2-18-237-111-132.us-west-2.compute.amazonaws.com:8000/users/1/",
      title: this.state.title,
      description: this.state.description,
      price: this.state.price * 100,
      category: "http://ec2-18-237-111-132.us-west-2.compute.amazonaws.com:8000/categories/" + this.state.categoryId + "/",
      status: "PENDING",
      booked: false,
      course: "",
      enabled: false
    };
    console.log(rawdata);
    const data = JSON.stringify(rawdata);
      try {
        const response = await api("/items/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: data
    });
      if (response.ok){
        this.setState( {
          successMessage: "Success! Please wait up to a day for approval!",
          loading: false
        })
        const that = this;
        setTimeout(() => {
          Router.push({pathname: "/"});
        }, 2000)
      } else {
        this.setState( {
          error: { message: "Fail to post the item." },
          loading: false
        });
      }
      } catch (e) {
          this.setState({error: e});
      }
    };
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await api("/categories");
    const data = await res.json();
    const defaultCateogory = { name: "Select a Category", id: -1 }
    this.setState({categories: [defaultCateogory, ...data.results]})
  }
  cancel = () => {
    Router.push({pathname: "/"});
  }

  render() {
    return (
      <Centered>
        <Form onSubmit={this.post}>
          <Error error={this.state.error} />
          <fieldset>
            <h1> Sell Item </h1>
            <h4> Please post an item to sell </h4>
            <label htmlFor="title">
              Title*
              <input type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.handleChange}/>
            </label>
            <label htmlFor="category">
              Category*
              <br />
              <select
              className="custom-select"
              id="category-select"
              name="category"
              value={this.state.categoryId}
              onChange={this.handleChange}
            >
              {this.state.categories &&
                this.state.categories.map(category => (
                  <option
                    className="dropdown-item"
                    value={category.id}
                    key={category.id}
                  >
                    {category.name}
                  </option>
                ))}
            </select>
            </label>
            <label htmlFor="Price">
              Price*
              <input type="number" placeholder="$" name="price" value={this.state.price} onChange={this.handleChange} />
            </label>
            <label htmlFor="description">
              Description*
              <input type="text" placeholder="Description" name="description" value={this.state.description} onChange={this.handleChange}/>
            </label>
            <label htmlFor="image">
              Images* (five max)<input type="file" name="image" multiple />
            </label>
            <h6>* Required field.</h6>
          <ButtonWrapper>
            <button type="submit" className="submit">Post</button>
            <div className="divider"/>
            <button className="cancel" onClick={this.cancel}>Cancel</button>
           </ButtonWrapper>
          </fieldset>

            {this.state.successMessage && (
              <Message>{this.state.successMessage}</Message>
            )}
        </Form>
      </Centered>
    );
  }
}

export default Sell;

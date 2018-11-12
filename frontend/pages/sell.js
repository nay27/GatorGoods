import styled from "styled-components";
import React from "react";

class SellPage extends React.Component {
    state = {
        loading: false,
        title: '',
        description: '',
        price: 0,
        category: 0,
        error: null
    };

    async componentDidMount() {
        this.setState({loading: true});

    }

    render(){

    return(
    <div>
    <h1> Sell Item </h1>
    <h3> Title* </h3>
    <input type="text" placeholder="Title Text"/>
    <h3> Category*   Price* </h3>

        <select>
          <option value="1">Furniture</option>
          <option value="2">Electronics</option>
          <option value="3">Clothing</option>
          <option value="4">Books</option>
        </select>
          <input type="text" placeholder="$"/>
    <h3> Description* </h3>
    <input type="text" placeholder="Description Text"/>
    <h3> Image </h3>
    <input type="file"/>
    </div>
    )

    }
}

export default SellPage;

import styled from "styled-components";
import React from "react";
import Link from "next/link";

const SellPageWrapper = styled.div`
    .select {
        border-radius: 0.5rem;
        width: "48";
        height: "48";
        position: relative;
        display: 'flex';
    }

    .title {
        border-radius: 0.5rem;
        width: 415px;
    }

    .divider {
        width:50px;
        height:auto;
        display:inline-block;
    }
    .description {
        border-radius: 0.5rem;
    }

    .cancel{
         width:178px;
         height:50px;
         background-color:#ff3232 ;
         border-radius:5px;
         font-weight:bold;
         color:white;
    }

      .submit{
             padding: "20px";
             width:178px;
             height:50px;
             background-color: #006400 ;
             padding:12px;
             border-radius:5px;
             font-weight:bold;
             color:white;
        }

      .price{
        width: 200px;
        border-radius: 0.5rem;
      }
`;


class SellPage extends React.Component {
    constructor(props) {
        super(props);
          this.state = {
                loading: false,
                title: '',
                description: '',
                price: 0,
                category: 0,
                image: '',
                error: null
           };
           //While user is typing in title
           this.handleTitleChange = this.handleTitleChange.bind(this);
           //While user is typing in description
           this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
           //While user is typing in price
           this.handlePriceChange = this.handlePriceChange.bind(this);
    }

    //While user is typing in title
    handleTitleChange(event) {
    //copies text in input box
        const value = event.target.value;
        console.log("handleTitleChange");
        this.setState((prevState) => {
            let title = prevState.title;
            title = value;
            return {
                title: title
            };
        });
    }

    //While user is typing in description
    handleDescriptionChange(event) {
    //copies text in input box
        const value = event.target.value;
        console.log("handleDescriptionChange");
        this.setState((prevState) => {
            let description = prevState.description;
            description = value;
            return {
                description: description
            };
        });
    }

    //While user is typing in price
    handlePriceChange(event) {
    //copies text in input box
        const value = event.target.value;
        console.log("handleQuestionChange");
        this.setState((prevState) => {
            let price = prevState.price;
            price = value;
            return {
                price: price
            };
        });
    }

    async componentDidMount() {
        this.setState({loading: true});

    }


    render(){

    return(
    <SellPageWrapper>
    <h1> Sell Item </h1>
    <h3> Title* </h3>
    <input className="title" type="text" placeholder="Title Text"/>
    <h3> Category* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Price* </h3>

        <select className="select">
          <option value="0">Select a category...</option>
          <option value="1">Furniture</option>
          <option value="2">Electronics</option>
          <option value="3">Clothing</option>
          <option value="4">Books</option>
          <option value="5">Miscellaneous</option>>
        </select>
        <div className="divider"/>
        <input className="price" type="text" placeholder="$"/>
    <h3> Description* </h3>
    <textarea rows="5" cols="55" className="description"></textarea>
    <h3> Image* </h3>
    <input type="file"/>
    <h3> </h3>
    <Link href={{pathname:"/"}}>
    <input className="cancel" type="button" value="Cancel"/>
    </Link>
    <div className="divider"/>
     <Link href={{pathname:"/"}}>
    <input className="submit" type="submit" value="Post" onClick={()=> {alert("Your post is awaiting approval by the Moderator.")}} />
    </Link>
    </SellPageWrapper>
    )
    }
}

export default SellPage;

import Centered from "./styles/Centered";
import Form from "./styles/Form";

class Sell extends React.Component {
  state = {
    loading: false,
    title: "",
    description: "",
    price: 0,
    category: 0,
    error: null
  };

  async componentDidMount() {
    this.setState({ loading: true });
  }

  render() {
    return (
      <Centered>
        <Form>
          <fieldset>
            <h1> Sell Item </h1>
            <label htmlFor="title">
              Title*
              <input type="text" placeholder="Title Text" name="title" />
            </label>
            <label htmlFor="category">
              Category*
              <br />
              <select name="category">
                <option value="1">Furniture</option>
                <option value="2">Electronics</option>
                <option value="3">Clothing</option>
                <option value="4">Books</option>
              </select>
            </label>
            <label htmlFor="Price">
              Price*
              <input type="text" placeholder="$" />
            </label>
            <label htmlFor="description">
              Description*
              <input type="text" placeholder="Description" />
            </label>
            <label htmlFor="image">
              Image <input type="file" name="image" multiple />
            </label>
          </fieldset>
        </Form>
      </Centered>
    );
  }
}

export default Sell;

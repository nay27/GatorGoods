import styled from "styled-components";

const Form = styled.form`
  border: 1px solid lightgray;
  box-shadow: ${props => props.theme.cardBS};
  padding: 2rem;
  fieldset {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    label {
      display: block;
      width: 100%;
      font-weight: 600;
      margin-bottom: 1rem;
    }
    button[type="submit"] {
      display: inline-block;
      border: none;
      background-color: ${props => props.theme.yellow};
      color: white;
      padding: 0.3rem 0;
      border-radius: 0.5rem;
    }
    input {
      display: block;
      width: 100%;
    }
  }
`;

export default Form;

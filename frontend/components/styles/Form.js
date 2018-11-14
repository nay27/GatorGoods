import styled from "styled-components";

const Form = styled.form `
  border: 1px solid lightgray;
  box-shadow: ${props => props.theme.cardBS};
  padding: 2rem;
  max-width: 600px;
  fieldset {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    label {
      display: block;
      width: 100%;
      font-weight: 400;
      margin-bottom: 1rem;
    }
    button[type="submit"] {
      display: inline-block;
      border: none;
      background-color: ${props => props.theme.yellow};
      color: white;
      padding: 0.3rem 1rem;
      border-radius: 0.5rem;
    }
    input {
      display: block;
      width: 100%;
    }
    select {
      border-radius: 0; 
      display: block;
    }
    textarea {
      display: block;
      width: 100%;
    }
  }
`;

export default Form;
import styled from "styled-components";
import PropTypes from "prop-types";

const ErrorWrapper = styled.div`
  background-color: #fa8072;
  color: #960018;
  padding: 0.5rem;
  border-radius: 2rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const Error = props => {
  if (props.error) return <ErrorWrapper>{props.error.message}</ErrorWrapper>;
  else return null;
};

Error.propTypes = {
  error: PropTypes.shape({ message: PropTypes.string })
};

export default Error;

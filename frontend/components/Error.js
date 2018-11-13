import styled from "styled-components";
import PropTypes from "prop-types";
import Message from "./styles/Message";

const ErrorWrapper = styled(Message)`
  background-color: #fa8072;
  color: #960018;
`;

const Error = props => {
  if (props.error) return <ErrorWrapper>{props.error.message}</ErrorWrapper>;
  else return null;
};

Error.propTypes = {
  error: PropTypes.shape({ message: PropTypes.string })
};

export default Error;

import styled from "styled-components";

const ErrorWrapper = styled.div`
    background-color: #FA8072;
    color: #960018;
    padding: 0.5rem;
    border-radius: 2rem;
    display: flex;
    align-content: center;
    justify-content: space-around;
    margin: 2rem;
`;

const Error = props => (
    <>
    { props.error && <ErrorWrapper>
        {props.error.message}
    </ErrorWrapper>
    }
    </>
);

export default Error;
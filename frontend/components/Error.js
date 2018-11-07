import styled from "styled-components";

const ErrorWrapper = styled.div`
    background-color: #FA8072;
    color: #960018;
    padding: 0.5rem;
    border-radius: 2rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-content: center;
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
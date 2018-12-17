/*
*   'Go Back' and 'Next Page' buttons for
*   Item posts if unable to fit on one page
*/

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin: 1rem;

  p {
    margin: 0 1rem;
  }
`;

const PageInfo = props => (
  <Wrapper>
    <button
      className={`btn ${props.hasPrevPage ? "btn-primary" : ""}`}
      disabled={props.hasPrevPage}
      onClick={props.prevPage}
    >
      Go Back
    </button>
    <p>Page {props.currPage}</p>
    <button
      className={`btn ${props.hasNextPage ? "btn-primary" : ""}`}
      disabled={props.hasNextPage}
      onClick={props.nextPage}
    >
      Next Page
    </button>
  </Wrapper>
);

export default PageInfo;

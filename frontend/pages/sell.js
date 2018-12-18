/*
*   Page for sell
*/

import styled from "styled-components";
import React from "react";
import Sell from "../components/Sell";
import ReactGA from 'react-ga';

ReactGA.pageview('/sell');
const SellPage = props => <Sell />;

export default SellPage;

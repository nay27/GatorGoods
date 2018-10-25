import React from 'react';
import ReactDOM from 'react-dom';

import Hello from "../components/Hello";

const App = () => (<div><Hello /></div>);

ReactDOM.render(<App />, document.getElementById("react-root"));
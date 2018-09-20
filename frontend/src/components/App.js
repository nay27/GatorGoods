import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Homepage from './homepage'
import About from './about'
import './App.css'
import Nav from './Nav';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                {/* React.Fragment is a pseudo-element, BrowserRouter can only have one child.
                When the application is actually rendered it React.Fragment is not rendered, it
                is merely a placeholder */}
                <React.Fragment>
                    <h1 className="header">
                        This is the root of the application.
                    </h1>
                    <Nav />
                    {/* Anything outside of a Route component will be rendered on every page */}
                    <Route exact path="/" component={Homepage} />
                    <Route path="/about" component={About} />
                </React.Fragment>
            </BrowserRouter>
        )
    }
}

export default App
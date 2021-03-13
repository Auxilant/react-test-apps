import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import './App.scss';
import Menu from './Menu'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Menu />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;

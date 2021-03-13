import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import './App.scss';
import Menu from './Menu'
import OrderDetails from './pages/order-page/OrderDetails'
import { order } from './data'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Menu />
                </Route>
                <Route path="/order-details">
                    <OrderDetails orderData={order}/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;

import React from "react";
import {Switch,Route,Redirect} from 'react-router'

import AddUpdate from "./addUpdate";
import Detail from "./detail";
import ProductHome from "./home";
export default class Product extends React.Component{
    render() {
        return (
            <Switch>
                <Route exact path='/product/addUpdate' component={AddUpdate} />
                <Route exact path='/product/detail' component={Detail} />
                <Route exact path='/product' component={ProductHome} />
                <Redirect to='/product' />
            </Switch>
        );
    }
}
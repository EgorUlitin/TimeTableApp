import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import React, {Component} from 'react';
import { render } from 'react-dom';
import Student from "./Student";
import Admin from '../Admin';

export default class Home extends Component {
    render() {
        return(
            <div>
                <Switch>
                    <Route exact path='/admin' component={Admin}/>
                    <Route path='/student/:id' component={Student}/>
                </Switch>
            </div>
        )
    }
}
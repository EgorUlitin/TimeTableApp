import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import React, {Component} from 'react';
import { render } from 'react-dom';
import Student from "./Student";
import Admin from '../Admin';
import Home from './Home';
import Group from "./Group";

export default class Main extends Component {
    render() {
        return(
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/admin' component={Admin}/>
                    <Route path='/student' component={Student}/>
                    <Route path='/student/group/:groupId' component={Group}/>
                    <Route path='/admin/group/:groupId' component={Group}/>
                </Switch>
            </main>
        )
    }
}
import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import 'bootstrap';
import Main from "./components/Main";
import Header from './components/Header';
import { render } from 'react-dom';

const history = createBrowserHistory();

export default class App extends Component {

    render() {
        return (
            <div>
                <Header />
                <Main />
            </div>
        )
    }
}

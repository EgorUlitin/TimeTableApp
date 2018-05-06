import React from 'react';
import 'moment/locale/ru';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import App from './App';
import TimeTable from "./components/TimeTable";
import Admin from "./Admin";
import Student from "./components/Student";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

render (
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);


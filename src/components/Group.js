import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import React, {Component} from 'react';
import axios from 'axios';
import {render} from 'react-dom';
import Student from "./Student";
import Admin from '../Admin';
import Home from './Home';
import {ListGroup, ListGroupItem} from 'react-bootstrap'

export default class Group extends Component {

    constructor() {
        super();
        this.state = {
            groups: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/groups').then(res => {
            console.log(res);
            this.setState({groups: res.data});
        });
    }

    render() {
        return (
            <div className="group">
                <ListGroup className='flex-row justify-content-between'>
                    {this.state.groups.map(group => <Link to={`/student/group/${group.id}`}><ListGroupItem
                        href='#'>{group.name}</ListGroupItem></Link>)}
                </ListGroup>
            </div>
        )
    }
}
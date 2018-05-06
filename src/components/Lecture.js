import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import React, {Component} from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import {render} from 'react-dom';
import Student from "./Student";
import Admin from '../Admin';
import Home from './Home';
import {Table} from 'react-bootstrap'

export default class Lecture extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/lectures').then(res => {
            this.setState({data: res.data});
        });

    }

    render() {
        return (
            <div className='flex-column justify-content-between'>
                    <Table responsive condensed text-center>
                        {this.state.data.map(data =>
                        <tbody>
                            <tr>
                                <td><Moment locale="ru" format="DD MMMM">{data.date}</Moment></td>
                                <td><Moment format="dddd">{data.date}</Moment></td>
                                <td><Moment format="hh:mm">{data.date}</Moment></td>
                                <td>Table cell</td>
                            </tr>
                        </tbody>)}
                    </Table>
                {/*{this.state.data.map(data => <Moment format="MM">{data.date}</Moment>)}*/}
                {/*{this.state.data.map(data => <Moment format="YYYY/MM/DD">{data.date}</Moment>)}*/}
            </div>
        )
    }
}
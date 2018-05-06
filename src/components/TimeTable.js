import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Tabs, Tab } from 'react-bootstrap'
import Header from "./Header";
import { render } from 'react-dom';
import Group from "./Group";
import Lecture from "./Lecture";

export default class TimeTable extends Component {

    render() {
        return (
            <div className='container '>
                <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                    <Tab eventKey={1} title="Расписание">
                        <Group />
                        <Lecture />
                    </Tab>
                    <Tab eventKey={2} title="Студенты">
                        <Group />
                    </Tab>
                </Tabs>
            </div>
        )
    }
}
import {Link} from 'react-router-dom'
import React, {Component} from 'react';
import { render } from 'react-dom';

export default class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <h2 className='text-center'>TimeTable for</h2>
                    {/*<li><Link to='/'>Home</Link></li>*/}
                    <div className='container text-center'>
                        <Link className='col' to='/admin'>Teachers</Link>
                        <Link className='col' to='/student'>Students</Link>
                    </div>
                </nav>
            </header>
        )
    }
}
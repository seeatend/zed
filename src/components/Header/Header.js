
import React from 'react';
import { NavLink } from 'react-router-dom';

class HeaderContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="app-header">
                <div className="pages">
                    <NavLink to='/' activeClassName='menu selected' exact={true}>PRE SALE</NavLink>
                    <NavLink to='/roster' activeClassName='menu selected' exact={true}>RACE ROSTER</NavLink>
                    <NavLink to='/stud' activeClassName='menu selected' exact={true}>STUD SOON</NavLink>
                    <NavLink to='/live' activeClassName='menu selected' exact={true}>LIVE RACING SOON</NavLink>
                    <NavLink to='/race' activeClassName='menu selected' exact={true}>RACE LOG SOON</NavLink>
                </div>
                <div className="start">
                    <span>START</span>
                </div>
            </header>
        );
    }
}

export default HeaderContent;
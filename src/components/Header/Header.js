
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
                    <NavLink to='/racing' activeClassName='menu selected' exact={true}>STABLE</NavLink>
                    <NavLink to='/stud' activeClassName='menu selected' exact={true}>STUD SOON</NavLink>
                    <NavLink to='/racing' activeClassName='menu selected' exact={true}>LIVE RACING SOON</NavLink>
                </div>
                <div className="start">
                    <span>START</span>
                </div>
            </header>
        );
    }
}

export default HeaderContent;
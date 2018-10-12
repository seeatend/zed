
import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/zed_logo_wht.svg';
import Discord from '../../images/discord_icon_wht.svg';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="app-footer">
                <div className="left">
                    <img src={Logo} />
                    <NavLink to='/about' activeClassName='menu selected' exact={true}>ABOUT</NavLink>
                    <NavLink to='/racing' activeClassName='menu selected' exact={true}>TERMS</NavLink>
                    <NavLink to='/stud' activeClassName='menu selected' exact={true}>RACE LOG SOON</NavLink>
                </div>
                <div className="right">
                    <span>1000/1000 SUPER RARE Z<span className="symbol">Ξ</span>D THOROUGHBRED AUCTION.</span>
                    <span className="open-date">OPENS NOV 6</span>
                    <img src={Discord} />
                </div>
            </footer>
        );
    }
}

export default Footer;
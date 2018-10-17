
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
                    <NavLink to='/' exact={true}>
                        <img src={Logo} />
                    </NavLink>
                    <NavLink to='/about' activeClassName='menu selected' exact={true}>ABOUT</NavLink>
                    <NavLink to='/faq' activeClassName='menu selected' exact={true}>FAQ</NavLink>
                    <NavLink to='/bloodline' activeClassName='menu selected' exact={true}>BLOODLINE</NavLink>
                    <NavLink to='/terms' activeClassName='menu selected' exact={true}>TERMS</NavLink>
                    <NavLink to='/privacy' activeClassName='menu selected' exact={true}>PRIVACY</NavLink>
                </div>
                <div className="right">
                    <span>1000/1000 SUPER RARE Z<span className="symbol">Ξ</span>D THOROUGHBRED SALE.</span>
                    <span className="open-date">OPENS NOV 6</span>
                    <img src={Discord} />
                </div>
            </footer>
        );
    }
}

export default Footer;
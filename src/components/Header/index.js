
import React from 'react';
import ismobile from 'is-mobile';
import HeaderDesktop from './Header.js';
import HeaderMobile from './_Header.js';

class Header extends React.Component {
    render() {
        return (
            <div>
                {
                    ismobile() ?
                        <HeaderMobile />
                        :
                        <HeaderDesktop />
                }
            </div>
        );
    }
}

export default Header;
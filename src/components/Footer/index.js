
import React from 'react';
import ismobile from 'is-mobile';
import FooterDesktop from './Footer.js';
import FooterMobile from './_Footer.js';

class Footer extends React.Component {
    render() {
        return (
            <div>
                {
                    ismobile() ?
                        <FooterMobile />
                        :
                        <FooterDesktop />
                }
            </div>
        );
    }
}

export default Footer;
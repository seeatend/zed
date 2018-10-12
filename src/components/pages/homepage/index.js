
import React from 'react';
import ismobile from 'is-mobile';
import HomePageDesktop from './HomePage.js';
import HomePageMobile from './_HomePage.js';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                {
                    ismobile() ?
                        <HomePageMobile />
                        :
                        <HomePageDesktop />
                }
            </div>
        );
    }
}

export default HomePage;
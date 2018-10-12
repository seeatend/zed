
import React from 'react';
import ismobile from 'is-mobile';
import HomePageDesktop from './Homepage.js';
import HomePageMobile from './_Homepage.js';

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
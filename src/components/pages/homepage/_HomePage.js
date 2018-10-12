
import React from 'react';

import Header from '../../Header/index.js';
import Footer from '../../Footer/index.js';
import Zed from '../../../images/zed_logo.png';

class HomePageContent extends React.Component {
    render() {
        return (
            <div>
                <Header />

                <main className="mobile">
                    <div className="left-content">
                        <div className="first-line"></div>
                        <div className="second-line"></div>
                        <div className="third-line"></div>

                        <span className="pre-sale">PRE SALE</span>
                        <img className="zed-logo" src={Zed} />
                    </div>
                </main>

                <Footer />
            </div>
        );
    }
}

export default HomePageContent;
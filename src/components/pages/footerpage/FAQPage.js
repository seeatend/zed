
import React from 'react';

import Header from '../../Header/index.js';
import Footer from '../../Footer/index.js';
import Accordion from '../../common/Accordion/footer/Accordion';
import { FAQQuery } from '../../static/FooterQuery';

class FAQPageContent extends React.Component {
    render() {
        return (
            <div className="about-content">
                <Header />

                <main>
                    <div className="left-content">
                        <div className="first-line"></div>
                        <div className="second-line"></div>
                        <div className="third-line"></div>
                    </div>
                    <div className="query-content">
                        <Accordion panels={FAQQuery}/>
                    </div>
                </main>

                <Footer />
            </div>
        );
    }
}

export default FAQPageContent;
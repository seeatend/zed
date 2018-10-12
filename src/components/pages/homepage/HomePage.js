
import React from 'react';

import Header from '../../Header/index.js';
import Footer from '../../Footer/index.js';

class HomePageContent extends React.Component {
    render() {
        return (
            <div>
                <Header />

                <main>
                    <div className="left-content">
                        <div className="first-line"></div>
                        <div className="second-line"></div>
                        <div className="third-line"></div>
                    </div>
                    <div className="action-content">
                        <span className="text">Own Something<br/>Special</span>
                        <span className="pre-sale">PRE SALE</span>
                    </div>
                    <div className="right-content">
                        <div className="first-race"></div>
                        <div className="second-race">
                            <div className="one">
                                <div>47</div>
                            </div>
                            <div className="two">
                                <div>5</div>
                            </div>
                        </div>
                        <div className="third-race">
                            <div className="one">
                                <div>1</div>
                            </div>
                            <div className="two">
                                <div>19</div>
                            </div>
                        </div>
                        <div className="fourth-race">
                            <div className="one">
                                <div>23</div>
                            </div>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        );
    }
}

export default HomePageContent;

import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="app-footer mobile">
                <div className="right">
                    <span>1000/1000 SUPER RARE ZED THOROUGHBRED SALE.</span>
                    <span className="open-date">OPENS NOV 6</span>
                </div>
            </footer>
        );
    }
}

export default Footer;
import React, {Component} from 'react';
import HomeSaleDataTable from '../../common/Table/HomeSaleDataTable';
import {sale_data} from '../../static/index';

import play from '../../../images/Triangle.svg';
import app1 from '../../../images/night_switch.svg';
import discordApp from '../../../images/discord1.png';

class Homepage extends Component {

    render() {
        return (
            <div className="App">
                <header className="app-header">
                    <div className="pages">
                        <a href="#">PRE SALE</a>
                        <a href="#">RACING</a>
                        <a href="#">STUD</a>
                        <a href="#">STABLE</a>
                    </div>
                    <div className="live-video">
                        <p>LIVE</p>
                        <a href="#">
                            <img className="play-btn" src={play}/>
                        </a>
                    </div>
                </header>
                <div className="body">
                    <div className="data-container">
                        <HomeSaleDataTable data={sale_data}/>
                    </div>
                </div>
                <div className="footer">
                    <div className="app-links">
                        <img src={require('../../../images/ZED_Logo.svg')} style={{width: '35px'}}/>
                        <a href="#">RACE LOG</a>
                        <a href="#">PROVABLY FAIR</a>
                        <a href="#">TERMS</a>
                    </div>
                    <div className="communication-apps">
                        <a href="#">
                            <img className="app-icon1" src={app1}/>
                        </a>
                        <a href="#">
                            <img className="app-icon2" src={discordApp}/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Homepage;

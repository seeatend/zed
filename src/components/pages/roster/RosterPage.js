
import React from 'react';

import Header from '../../Header/index.js';
import Footer from '../../Footer/index.js';
import {RosterData} from '../../static/RosterData';
import Accordion from '../../common/Accordion/roster/Accordion';

class RosterPageContent extends React.Component {
    render() {
        return (
            <div className="roster-content">
                <Header />

                <main>
                    <div className="main-content">
                        <h2>Race Roster</h2>
                        <div className="page-exp">
                            The latest ready to thoroughbreds that have been sold.  Each thoroughbred below has been included on the race schedule for the 2019/2020 season. Owners of each thoroughbred will be able to breed, sell, trade and race.
                        </div>
                        <div className="accordion-header">
                            <div>Stable</div>
                            <div>Throughbred</div>
                        </div>
                        <div className="accordion-content">

                            <div className='accordion' role='tablist'>
                                <Accordion panels={RosterData}/>
                            </div>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        );
    }
}

export default RosterPageContent;
/* eslint-disable */

import React from 'react';
import * as ReactDOM from 'react-dom';
import Horse from '../../../../images/horse1.png';

class Panel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            height: 0
        };
    }

    componentDidMount() {
        window.setTimeout(() => {
            const el = ReactDOM.findDOMNode(this);
            const height = el.querySelector('.panel__inner').scrollHeight;
            this.setState({
                height
            });
        }, 333);
    }

    render() {
        const {label, content, activeTab, index, activateTab} = this.props;
        const {height} = this.state;
        const isActive = activeTab === index;
        const innerStyle = {
            height: isActive ? `${height}px` : '0px'
        };

        return (
            <div className='panel' role='tabpanel' aria-expanded={isActive}>
                <button className='panel__label' role='tab' onClick={activateTab}>
                    <div className="stable-content">
                        <div className="stable">{label.stable}</div>
                        <div className="sold">SOLD</div>
                    </div>
                    <div className="throughbred">{label.throughbred}</div>
                </button>
                <div className='panel__inner' style={innerStyle} aria-hidden={!isActive}>
                    <div className="panel__content">
                        <div className="items-content">
                            <div className="inner-item">
                                <div className="key">GEN</div>
                                <div className="value">{content.gen}</div>
                            </div>
                            <div className="inner-item">
                                <div className="key">BLOODLINE</div>
                                <div className="value">{content.bloodline}</div>
                            </div>
                            <div className="inner-item">
                                <div className="key">GENDER</div>
                                <div className="value">{content.gender}</div>
                            </div>
                            <div className="inner-item">
                                <div className="key">COAT</div>
                                <div className="value">{content.coat}</div>
                            </div>
                            <div className="inner-item">
                                <div className="key">RACES</div>
                                <div className="value">{content.races}</div>
                            </div>
                            <div className="inner-item">
                                <div className="key">CAREER</div>
                                <div className="value">{content.career}</div>
                            </div>
                            <div className="inner-item">
                                <div className="key">WIN RATE</div>
                                <div className="value">{content.winrate}</div>
                            </div>
                            <div className="inner-item">
                                <div className="key">offspring</div>
                                <div className="value">{content.offspring}</div>
                            </div>
                        </div>
                        <div className="horse-img">
                            <img className="horse" src={Horse} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Panel;
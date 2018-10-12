import React, {Component} from 'react';
import PropTypes from 'prop-types';
import horse1 from '../../../images/horse1.png';
import '../../../styles/components/horse.css';

const horseOperationStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '33px'
};

const info = {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    background: '#35333329',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

const countInfo = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '10px',
    margin: '10px'
};

class HorseInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const horse = this.props.horse;
        return (
            <div className="horseStyle">
                <img className="share_icon" src={require('../../../images/Share_Icon.svg')}/>
                <h4 className="horse-name">{horse.name}</h4>
                <h6 style={{marginTop: '0', color: '#929292'}}>{horse.characteristic}</h6>
                <img src={horse1} style={{width: '240px'}}/>
                <div style={horseOperationStyle}>
                    <a href="#" className="btnStyle1">1.26E</a>
                    <a href="#" className="btnStyle2">BUY</a>
                    <div style={countInfo}>
                        <p>10/98</p>
                        <span style={info}>i</span>
                    </div>
                </div>
            </div>
        );
    }
}

HorseInfo.propTypes = {
    horse: PropTypes.object
};

export default HorseInfo;
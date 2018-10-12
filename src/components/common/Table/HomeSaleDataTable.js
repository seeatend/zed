import React, {Component} from 'react';
import PropTypes from 'prop-types';
import HorseInfo from '../Horse/HorseInfo';

class HomeSaleDataTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            horseInfo: {
                name: 'LITTLE TOKYO',
                characteristic: 'BLISTER BLUE'
            },
            hover: false,
            rowIndex: null
        };
    }

    showHorseInfo(index) {
        this.setState({
            horseInfo: this.props.data[index]
        });
    }

    onMouseEnterHandler(index) {
        this.setState({
            rowIndex: index
        });
    }

    onMouseLeaveHandler() {
        this.setState({
            rowIndex: null
        });
    }

    generateRows() {
        const data = this.props.data;
        return data.map((item, index) => {
            let horse;
            if (index === 0) {
                horse = <td rowSpan={10}><HorseInfo horse={this.state.horseInfo}/></td>;
            }
            return ([
                <tr key={index}
                    onClick={(e) => this.showHorseInfo(index, e)}
                    onMouseEnter={(e) => this.onMouseEnterHandler(index, e)}
                    onMouseLeave={(e) => this.onMouseLeaveHandler(index, e)}
                >
                    <td>
                        <div className={(this.state.rowIndex === index ? 'sale-hover' : '')}>{item.name}</div>
                    </td>
                    <td>
                        <div className={(this.state.rowIndex === index ? 'sale-hover' : '')}>{item.gender}</div>
                    </td>
                    <td>
                        <div className={(this.state.rowIndex === index ? 'sale-hover' : '')}>{item.gen}</div>
                    </td>
                    <td>
                        <div className={(this.state.rowIndex === index ? 'sale-hover' : '')}>{item.races}</div>
                    </td>
                    <td>
                        <div className={(this.state.rowIndex === index ? 'sale-hover' : '')}>{item.career}</div>
                    </td>
                    <td>
                        <div className={(this.state.rowIndex === index ? 'sale-hover' : '')}>{item.winRate}</div>
                    </td>
                    <td>
                        <div className={(this.state.rowIndex === index ? 'sale-hover' : '')}>{item.bloodline}</div>
                    </td>
                    <td>
                        <div className={(this.state.rowIndex === index ? 'sale-hover' : '')}>{item.sire}</div>
                    </td>
                    <td>
                        <div className={(this.state.rowIndex === index ? 'sale-hover' : '')}>{item.dam}</div>
                    </td>
                    <td>
                        <div className={(this.state.rowIndex === index ? 'sale-hover' : '')}>{item.characteristic}</div>
                    </td>
                    <td>
                        <div className={(this.state.rowIndex === index ? 'sale-hover' : '')}>{item.offspring}</div>
                    </td>
                    {horse}
                </tr>
            ]);
        });
    }

    render() {
        const rowComponents = this.generateRows();
        return (
            <table>
                <thead>
                    <tr className="table-title">
                        <th>HORSE</th>
                        <th>GENDER</th>
                        <th>GEN</th>
                        <th>RACES</th>
                        <th>CAREER</th>
                        <th>WIN RATE</th>
                        <th>BLOODLINE</th>
                        <th>SIRE</th>
                        <th>DAM</th>
                        <th>CHARACTERISTICS</th>
                        <th>OFFSPRING</th>
                        <th>11h 32m 15s</th>
                    </tr>
                </thead>
                <tbody>{rowComponents}</tbody>
            </table>
        );
    }


}

HomeSaleDataTable.propTypes = {
    data: PropTypes.array
};

export default HomeSaleDataTable;
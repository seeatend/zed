import * as React from 'react';
import PropTypes from 'prop-types';
import Panel from './Panel';

class Accordion extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: 0
        };

        this.activateTab = this.activateTab.bind(this);
    }

    activateTab(index) {
        this.setState(prev => ({
            activeTab: prev.activeTab === index ? -1 : index
        }));
    }

    render() {
        const { panels } = this.props;
        const { activeTab } = this.state;
        return (
            <div className='accordion' role='tablist'>
                {panels.map((panel, index) =>
                    <Panel
                        key={index}
                        activeTab={activeTab}
                        index={index}
                        {...panel}
                        activateTab={this.activateTab.bind(null, index)}
                    />
                )}
            </div>
        );
    }
}

Accordion.propTypes = {
    panels: PropTypes.array
};

export default Accordion;
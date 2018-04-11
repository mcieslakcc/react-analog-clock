import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AnalogClockLayout from './AnalogClockLayout';
import ClockFace from './ClockFace';
import Styles from './styles';
import { cssTransform } from './util';
import { dark } from './themes';

export default class AnalogClock extends Component {

    constructor(props) {
        super();
        this.styles = cssTransform(Styles, props);
    }

    componentWillReceiveProps(nextProps) {
        this.styles = cssTransform(Styles, nextProps);
    }

    render() {
        return (<div style={this.styles.base}>
            <AnalogClockLayout gmtOffset={this.props.gmtOffset} styles={this.styles} borderRadius={this.props.borderRadius} />;
            <ClockFace styles={this.styles} width={this.props.width} showDigits={this.props.showDigits} borderRadius={this.props.borderRadius} />
        </div>);
    }
}

AnalogClock.propTypes = {
    theme: PropTypes.shape({
        background: PropTypes.string.isRequired,
        border: PropTypes.string.isRequired,
        center: PropTypes.string.isRequired,
        seconds: PropTypes.string.isRequired,
        minutes: PropTypes.string.isRequired,
        hour: PropTypes.string.isRequired,
        tick: PropTypes.string.isRequired,
    }),
    width: PropTypes.number,
    gmtOffset: PropTypes.string,
    showDigits: PropTypes.bool,
};

AnalogClock.defaultProps = {
    theme: dark,
    width: 400,
    showDigits: true,
    borderRadius: true
};

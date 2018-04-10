import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AnalogClockLayout from './AnalogClockLayout';
import Styles from './styles';
import { cssTransform, updateTime, calculateCommonSizes } from './util';
import { dark } from './themes';

export default class AnalogClock extends Component {

    constructor(props) {
        super();

        const date = this.initializeTime(props.gmtOffset);
        this.state = {
            seconds: date[2],
            minutes: date[1],
            hour: date[0],
        };
        const result = calculateCommonSizes(props.width);
        console.log(result);
        this.styles = cssTransform(Styles, props);
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(updateTime(this.state));
        }, 1000);
    }

    componentWillReceiveProps(nextProps) {
        this.styles = cssTransform(Styles, nextProps);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    initializeTime(gmtOffset) {
        const now = new Date();
        if (gmtOffset && gmtOffset !== 'undefined') {
            const offsetNow = new Date(now.valueOf() + (parseFloat(gmtOffset) * 1000 * 60 * 60));
            return [offsetNow.getUTCHours(), offsetNow.getUTCMinutes(), offsetNow.getUTCSeconds()];
        } else {
            return [now.getHours(), now.getMinutes(), now.getSeconds()];
        }
    }

    render() {
        return <AnalogClockLayout {...this.state} styles={this.styles} width={this.props.width} />;
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
};

AnalogClock.defaultProps = {
    theme: dark,
    width: 400,
};

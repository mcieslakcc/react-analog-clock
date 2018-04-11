import PropTypes from 'prop-types';
import { updateTime } from './util';
import React, { Component } from 'react';
import { Tick, DigitSpace } from './timeConstants';

export default class AnalogClockLayout extends Component {

    constructor(props) {
        super();

        const date = this.initializeTime(props.gmtOffset);
        this.state = {
            seconds: date[2],
            minutes: date[1],
            hour: date[0],
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(updateTime(this.state));
        }, 1000);
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
        const { styles } = this.props;
        const secondStyle = Object.assign({}, styles.second, {
            transform: `translateX(-50%) translateY(-100%) rotate(${this.state.seconds * Tick}deg)`,
        });
        const minuteStyle = Object.assign({}, styles.minute, {
            transform: `translateX(-50%) translateY(-100%) rotate(${this.state.minutes * Tick}deg)`,
        });
        const hourStyle = Object.assign({}, styles.hour, {
            transform: `translateX(-50%) translateY(-100%) rotate(${(this.state.hour * DigitSpace) + (this.state.minutes / 2)}deg)`,
        });
        return (
            <div>
                <div data-testid="seconds" style={secondStyle}></div>
                <div data-testid="minutes" style={minuteStyle}></div>
                <div data-testid="hour" style={hourStyle}></div>
                <div style={styles.center}></div>
            </div>
        );
    }
}

AnalogClockLayout.propTypes = {
    styles: PropTypes.shape({
        second: PropTypes.object.isRequired,
        minute: PropTypes.object.isRequired,
        hour: PropTypes.object.isRequired,
        digit: PropTypes.object.isRequired
    }).isRequired,
    gmtOffset: PropTypes.string
};

import React from 'react';
import PropTypes from 'prop-types';
import { roundToSecondPlace } from './util';

const SecondsInMinute = 60;
const Tick = 6;

const DigitsCount = 12;
const DigitSpace = 30;

const digitsFactor = 0.7;

const toRadius = (degree) => {
    return degree * Math.PI / 180;
};

const getXPoint = (shift, radius, degree) => {
    return roundToSecondPlace(shift + radius * Math.sin(toRadius(degree)));
};

const getYPoint = (shift, radius, degree) => {
    return roundToSecondPlace(shift - radius * Math.cos(toRadius(degree)));
};

const renderNotches = ({ smallTick, largeTick }, width) => {
    const notches = [];
    const radius = width / 2;
    for (let i = 0; i < SecondsInMinute; i++) {
        const x = getXPoint(radius, radius, i * Tick);
        const y = getYPoint(radius, radius, i * Tick);
        const style = Object.assign({}, i % (SecondsInMinute / DigitsCount) === 0 ? largeTick : smallTick, {
            transform: `translate(-50%, -50%) rotate(${i * Tick}deg)`,
            left: x,
            top: y
        });
        notches.push(<span key={i} style={style} />);
    }
    return notches;
};

const renderDigits = ({ digit }, width) => {
    const digits = [];
    const shift = (width / 2);
    const radius = shift * digitsFactor;
    for (let i = 1; i <= DigitsCount; i++) {
        const x = getXPoint(shift, radius, DigitSpace * i);
        const y = getYPoint(shift, radius, DigitSpace * i);
        let style = Object.assign({}, digit, {
            left: x,
            top: y
        });
        digits.push(<span key={i} style={style}>{i}</span>);
    }
    return digits;
};

export default function AnalogClockLayout({ hour, minutes, seconds, styles, width }) {
    const secondStyle = Object.assign({}, styles.second, {
        transform: `translateX(-50%) translateY(-100%) rotate(${seconds * Tick}deg)`,
    });
    const minuteStyle = Object.assign({}, styles.minute, {
        transform: `translateX(-50%) translateY(-100%) rotate(${minutes * Tick}deg)`,
    });
    const hourStyle = Object.assign({}, styles.hour, {
        transform: `translateX(-50%) translateY(-100%) rotate(${(hour * DigitSpace) + (minutes / 2)}deg)`,
    });
    return (
        <div style={styles.base}>
            <div data-testid="seconds" style={secondStyle}></div>
            <div data-testid="minutes" style={minuteStyle}></div>
            <div data-testid="hour" style={hourStyle}></div>
            <div style={styles.center}></div>
            {renderNotches(styles, width)}
            {renderDigits(styles, width)}
        </div>
    );
}

AnalogClockLayout.propTypes = {
    hour: PropTypes.number.isRequired,
    minutes: PropTypes.number.isRequired,
    seconds: PropTypes.number.isRequired,
    styles: PropTypes.shape({
        second: PropTypes.object.isRequired,
        minute: PropTypes.object.isRequired,
        hour: PropTypes.object.isRequired,
        digit: PropTypes.object.isRequired
    }).isRequired,
    width: PropTypes.number.isRequired
};

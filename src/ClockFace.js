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

export default function AnalogClockLayout({ styles, width, showDigits }) {
    return (
        <div>
            {renderNotches(styles, width)}
            {showDigits ? renderDigits(styles, width) : null}
        </div>
    );
}

AnalogClockLayout.propTypes = {
    styles: PropTypes.shape({
        second: PropTypes.object.isRequired,
        minute: PropTypes.object.isRequired,
        hour: PropTypes.object.isRequired,
        digit: PropTypes.object.isRequired
    }).isRequired,
    width: PropTypes.number.isRequired,
    showDigits: PropTypes.bool.isRequired
};

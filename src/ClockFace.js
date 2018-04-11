import React from 'react';
import PropTypes from 'prop-types';
import { SecondsInMinute, DigitsCount, DigitSpace, Tick } from './timeConstants';
import { roundToSecondPlace } from './util';

const digitsFactor = 0.72;
const LargeNotchFactor = 0.98;

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
    const shift = (width / 2);
    let radius = shift;
    let tickType = smallTick;
    for (let i = 0; i < SecondsInMinute; i++) {
        if (i % (SecondsInMinute / DigitsCount) === 0)  {
            radius = radius * LargeNotchFactor;
            tickType = largeTick;
        }
        const x = getXPoint(shift, radius, i * Tick);
        const y = getYPoint(shift, radius, i * Tick);
        const style = Object.assign({}, tickType, {
            transform: `translate(-50%, -50%) rotate(${i * Tick}deg)`,
            left: x,
            top: y
        });
        radius = shift;
        tickType = smallTick;
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

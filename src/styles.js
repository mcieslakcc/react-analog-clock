const SizeFactors = {
    center: 0.07,
    longHandHeight: 0.51,
    shortHandHeight: 0.3,
    longHandWidth: 0.02,
    smallTickHeight: 0.04,
    longTickHeight: 0.07,
    font: 0.15
};

const getBorderRadius = ({ borderRadius }) => {
    return borderRadius ? '999px' : null;
};

const calculateSize = (factor, { width }) => {
    return Math.floor(width * factor);
};

const AnalogBase = {
    background: s => s.theme.background,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '100%',
    border: s => `${s.width / 20}px solid ${s.theme.border}`,
    position: 'relative',
    height: s => s.width,
    width: s => s.width,
};

const AnalogCenter = {
    background: s => s.theme.center,
    borderRadius: '100%',
    height: calculateSize.bind(null, SizeFactors.center),
    width: calculateSize.bind(null, SizeFactors.center),
    left: '50%',
    position: 'absolute',
    top: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
};

const AnalogHand = {
    left: '50%',
    position: 'absolute',
    top: '50%',
    transformOrigin: '50% 100%',
};

const AnalogSecondHand = Object.assign({}, AnalogHand, {
    background: s => s.theme.seconds,
    height: calculateSize.bind(null, SizeFactors.longHandHeight),
    width: calculateSize.bind(null, SizeFactors.longHandWidth / 2),
    zIndex: 1
});

const AnalogMinuteHand = Object.assign({}, AnalogHand, {
    background: s => s.theme.minutes,
    height: calculateSize.bind(null, SizeFactors.longHandHeight),
    width: calculateSize.bind(null, SizeFactors.longHandWidth),
    borderRadius: getBorderRadius
});

const AnalogHourHand = Object.assign({}, AnalogHand, {
    background: s => s.theme.hour,
    height: calculateSize.bind(null, SizeFactors.shortHandHeight),
    width: calculateSize.bind(null, SizeFactors.longHandWidth * 2),
    borderRadius: getBorderRadius
});

const AnalogSmallTick = {
    background: s => s.theme.tick,
    height: calculateSize.bind(null, SizeFactors.smallTickHeight),
    width: calculateSize.bind(null, SizeFactors.longHandWidth / 2),
    position: 'absolute',
    borderRadius: getBorderRadius
};

const AnalogLargeTick = {
    background: s => s.theme.tick,
    height: calculateSize.bind(null, SizeFactors.longTickHeight),
    width: calculateSize.bind(null, SizeFactors.longHandWidth),
    position: 'absolute',
    borderRadius: getBorderRadius
};

const digit = {
    position: 'absolute',
    color: s => s.theme.hour,
    transform: 'translate(-45%, -45%)',
    fontSize: calculateSize.bind(null, SizeFactors.font)
};


export default {
    base: AnalogBase,
    center: AnalogCenter,
    second: AnalogSecondHand,
    minute: AnalogMinuteHand,
    hour: AnalogHourHand,
    smallTick: AnalogSmallTick,
    largeTick: AnalogLargeTick,
    digit
};

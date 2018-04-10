const AnalogBase = {
    background: s => s.theme.background,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '100%',
    border: s => `${s.width / 20}px solid ${s.theme.border}`,
    height: s => s.width,
    position: 'relative',
    width: s => s.width,
    overflow: 'hidden'
};

const calculateSize = (factor, { width }) => {
    console.log('width', width)
    console.log('factor', factor)
    const size = Math.round(width * factor);
    return +(Math.round(size + "e+2")  + "e-2");
};

// constcalculateSize(100, { width: 10 });
const AnalogCenter = {
    background: s => s.theme.center,
    borderRadius: '100%',
    height: calculateSize.bind(null, 0.07),
    left: '50%',
    position: 'absolute',
    top: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    width: calculateSize.bind(null, 0.07),
};

const AnalogHand = {
    left: '50%',
    position: 'absolute',
    top: '50%',
    transformOrigin: '50% 100%',
};

const AnalogSecondHand = Object.assign({}, AnalogHand, {
    background: s => s.theme.seconds,
    height: s => Math.floor(s.width * 0.5),
    width: s => s.width * 0.01,
    borderRadius: s => s.width * 0.02,
    zIndex: 1
});

const AnalogMinuteHand = Object.assign({}, AnalogHand, {
    background: s => s.theme.minutes,
    height: s => Math.floor(s.width * 0.5),
    width: s => s.width * 0.02,
    borderRadius: s => s.width * 0.05
});

const AnalogHourHand = Object.assign({}, AnalogHand, {
    background: s => s.theme.hour,
    height: s => Math.floor(s.width * 0.3),
    width: s => s.width * 0.04,
    borderRadius: s => s.width * 0.1
});

const AnalogSmallTick = {
    background: s => s.theme.tick,
    height: s =>  s.width * 0.075,
    position: 'absolute',
    width: s => s.width * 0.01,
    borderRadius: s => s.width * 0.02
};

const AnalogLargeTick = {
    background: s => s.theme.tick,
    height: s =>  s.width * 0.15,
    position: 'absolute',
    width: s => s.width * 0.02,
    borderRadius: s => s.width * 0.04
};

const digit = {
    position: 'absolute',
    color: s => s.theme.hour,
    transform: 'translate(-50%, -50%)',
    fontSize: s => s.width * 0.15
};


export default {
    base: AnalogBase,
    center: AnalogCenter,
    second: AnalogSecondHand,
    minute: AnalogMinuteHand,
    digit: digit,
    hour: AnalogHourHand,
    smallTick: AnalogSmallTick,
    largeTick: AnalogLargeTick,
};

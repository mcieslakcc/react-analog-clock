const AnalogBase = {
    background: s => s.theme.background,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '100%',
    border: s => `${s.width / 20}px solid ${s.theme.border}`,
    height: s => s.width,
    position: 'relative',
    width: s => s.width,
};

const AnalogCenter = {
    background: s => s.theme.center,
    borderRadius: '100%',
    height: s => s.width * 0.07,
    left: '50%',
    position: 'absolute',
    top: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    width: s => s.width * 0.07,
};

const AnalogHand = {
    left: '50%',
    position: 'absolute',
    top: '50%',
    transformOrigin: '50% 100%',
    borderRadius: '10px'
};

const AnalogSecondHand = Object.assign({}, AnalogHand, {
    background: s => s.theme.seconds,
    height: s => Math.floor(s.width * 0.5),
    width: s => s.width * 0.01,
    borderRadius: s => s.width * 0.02
});

const AnalogMinuteHand = Object.assign({}, AnalogHand, {
    background: s => s.theme.minutes,
    height: s => Math.floor(s.width * 0.5),
    width: s => s.width * 0.02,
    borderRadius: s => s.width * 0.03

});

const AnalogHourHand = Object.assign({}, AnalogHand, {
    background: s => s.theme.hour,
    height: s => Math.floor(s.width * 0.2),
    width: s => s.width * 0.04,
    borderRadius: s => s.width * 0.05
});

const AnalogSmallTick = {
    background: s => s.theme.tick,
    height: s =>  Math.ceil(s.width / 50),
    // left: '50%',
    position: 'absolute',
    // top: s => Math.ceil(s.width / 50),
    // transformOrigin: s => `0 ${Math.ceil(s.width / 2)}px`,
    width: s => Math.ceil(s.width / 100),
    borderRadius: s =>  Math.ceil(s.width / 400)
};

const AnalogLargeTick = {
    background: s => s.theme.tick,
    height: s =>  Math.ceil(s.width / 25),
    // left: s => Math.ceil(s.width / 2) + 2,
    position: 'absolute',
    // top: s => Math.ceil(s.width / 25),
    // transformOrigin: s => `0 ${Math.ceil(s.width / 2)}px`,
    width: s =>  Math.ceil(s.width / 50),
    borderRadius: s =>  Math.ceil(s.width / 200)
};

const digits = {
    position: 'absolute',
    color: s => s.theme.hour,
    // width: s => Math.floor(s.width * 0.85),
    // height: s => Math.floor(s.width * 0.85),
    transform: 'translate(-50%, -50%)',
    // left: s => Math.floor(s.width / 2),
    // top: s => Math.floor(s.width / 2)
    fontSize: s => s.width * 0.15
};


export default {
    base: AnalogBase,
    center: AnalogCenter,
    second: AnalogSecondHand,
    minute: AnalogMinuteHand,
    digits: digits,
    hour: AnalogHourHand,
    smallTick: AnalogSmallTick,
    largeTick: AnalogLargeTick,
};

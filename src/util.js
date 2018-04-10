export function cssTransform(styles, props) {
    return Object.keys(styles).reduce((newStyles, rootKey) => {
        const style = styles[rootKey];
        newStyles[rootKey] = Object.keys(style).reduce((newStyle, key) => {
            if (typeof style[key] === 'function') {
                newStyle[key] = style[key](props);
            } else {
                newStyle[key] = style[key];
            }
            return newStyle;
        }, {});
        return newStyles;
    }, {});
}

export function updateTime({ seconds, minutes, hour }) {
    seconds += 1;
    if (seconds === 60) {
        seconds = 0;
        minutes += 1;
    }
    if (minutes === 60) {
        minutes = 0;
        hour += 1;
    }
    if (hour === 12) {
        hour = 0;
    }
    return { seconds, minutes, hour };
}

const SizeFactors = {
    center: 0.07,
    longHandHeight: 0.5,
    shortHandHeight: 0.3,
    longHandWidth: 0.02,
    shortHandWidth: 0.01,
    longHandRadius: 0.02
};

export function roundToSecondPlace(value) {
    console.log(value)
    return +(Math.round(value + 'e+2')  + 'e-2');
}

export function calculateSize(factor, width) {
    console.log('width', width)
    console.log('factor', factor)
    console.log('roundToSecondPlace(width * factor);', roundToSecondPlace(width * factor))
    return roundToSecondPlace(width * factor);
};

export function calculateCommonSizes(width) {
    return Object.keys(SizeFactors).map((key) => {
        return calculateSize(SizeFactors[key], width);
    });
} 

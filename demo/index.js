import React from 'react';
import ReactDOM from 'react-dom';
import AnalogClock, { Themes } from '../src/index';

const WIDTH = 200;
const GMTOFFSET= "-5.5";

const analogClockTheme = {
    background: 'transparent',
    border: 'transparent',
    center: 'red',
    seconds: 'red',
    minutes: '#FFFFFF',
    hour: '#FFFFFF',
    tick: 'white'
};



const Component = (
    <div style={ {background: 'black'}}>
        <span><AnalogClock width={WIDTH} theme={analogClockTheme} showDigits={true} /></span>
        <span><AnalogClock width={WIDTH} theme={Themes.dark} /></span>
        <span><AnalogClock width={WIDTH} theme={Themes.aqua} /></span>
        <span><AnalogClock width={WIDTH} theme={Themes.lime} /></span>
        <span><AnalogClock width={WIDTH} theme={Themes.sherbert} /></span>
        <span><AnalogClock width={WIDTH} theme={Themes.navy} /></span>
        {/**/}
        <h2>With GMT Offset -5.5:</h2>
        <span><AnalogClock width={WIDTH} theme={Themes.light} gmtOffset={GMTOFFSET} /></span>
    </div>
);

ReactDOM.render(Component, document.getElementById('app'));

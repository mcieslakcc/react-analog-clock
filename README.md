# \<AnalogClock /\>

Forked from [zackargyle/react-analog-clock](https://github.com/zackargyle/react-analog-clock)

###New features and fixes
1. Display digits on clock face(configure by props)
2. Add border radius to clock hands((configure by props)
3. Resize all clock components (hands, digits, notches) based on width property
4. Move hour hand according to current minutes(fix)
5. Change a way of rendering notches to be always on proper position(fix)

AnalogClock is a themable clock component. It provides an easy way of adding a clock to your application. The clock is fully responsive based on the `width` prop you pass in.

```
npm install --save react-analog-clock
```

Try out the [DEMO](http://zackargyle.github.io/react-analog-clock/)

![](https://raw.githubusercontent.com/zackargyle/react-analog-clock/master/demo/screenshot.png)

### Usage
```js
import AnalogClock, { Themes } from 'react-analog-clock';

ReactDOM.render(<AnalogClock theme={Themes.dark} />, element);
```

### Props
prop    | default | description
------- | ------- | ----------
`width` | 400px
`theme` | Themes.dark
`gmtOffset` (optional)| offset of `new Date()` _(e.g. '-5.5')_
`showDigits` | true | shows digits on clock face
`borderRadius` | true | adds borders radius to clock hand and notches

### Themes
Theme      | Description
---------- | -----------
`dark`     | Black base, black border
`light`    | White base, gray border
`aqua`     | Gray base, aqua border
`lime`     | Green base, white border
`sherbert` | Gradient (green/pink) base, white border
`navy`     | Gradient (blue) base, white border

### Scripts
script         | description
-------------- | -----------
`npm start`    | run the demo on `localhost:3000`
`npm test` | run the test suite
`npm run lint` | run the linter

### Patrons
>Be the first to contribute!
>✌⊂(✰‿✰)つ✌

### Ideas for contribution
- Allow % width values
- Add Timezone (Winter/Summertime) Support
- Update docs with how to write custom themes
- Add hand movement animation

## License
[MIT](http://isekivacenz.mit-license.org/)

# \<AnalogClock /\>

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
prop    | default
------- | -------
`width` | 400px
`theme` | Themes.dark
`gmtOffset` (optional)| offset of `new Date()` _(e.g. '-5.5')_

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

# gb-toolkit
Javascript Toolkit for front-end developer to controll the UI

## Install
```bash
npm i gb-toolkit
```

## Library Usage
```javascript
import gbToolkit from 'gb-toolkit'
```

#### debouncer
```javascript
window.addEventListener('scroll', gbToolkit.debouncer(500, () => console.log('debounced event callback fire')))
```

#### throttler
```javascript
window.addEventListener('click', gbToolkit.throttler(500, () => console.log('throttled event callback fire')))
```

#### sleep
```javascript
(async function () {
  console.log('sleeping...')
  await gbToolkit.sleep(2000)
  console.log('woke up!')
})()
```

#### pipeline
```javascript
const result = gbToolkit.pipeline(n => n+1, n => n+2, n => n+3)(1)
console.log(result === 7) // true
```

#### finish-scroll
```javascript
const scrollFinishObserver = gbToolkit.finishScroll(50)
scrollFinishObserver.then(() => {
  // observe scroll finish every 50ms
  // do something after scroll finished
})
```

#### range
```javascript
const range1 = gbToolkit.range({ N: 10 }) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const range2 = gbToolkit.range({ N: 5, start: 2, delta: 2 }) // [2, 4, 6, 8, 10]
range1.forEach(r => {
  // do something
})
range2.reduce((a, c) => {
  // do something
  return a
}, 0)
```

# Testing
Under the /test folder, using jest
```bash
tsc && jest
```

# License
ISC
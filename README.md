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
```

# Testing
Under the /test folder, using jest
```bash
tsc && jest
```

# License
ISC
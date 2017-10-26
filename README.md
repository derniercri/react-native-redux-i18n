# react-native-redux-i18n
Integrates [react-native-i18n](https://github.com/AlexanderZaytsev/react-native-i18n) based on [I18n.js](https://github.com/fnando/i18n-js) with [redux](https://github.com/reactjs/redux)

Inspired by [redux-react-native-i18n](https://github.com/derzunov/redux-react-native-i18n)

## Install :

You need to install `react-native-i18n` first... cf. [instructions](https://github.com/AlexanderZaytsev/react-native-i18n/blob/master/README.md)

```shell
$ npm install react-native-redux-i18n --save
```

## Inside the box :

```javascript
import I18n, { reducer, setLocale, Loc } from 'react-native-redux-i18n'

setLocale(locale: string)
// dispatch an action
// { type: `SET_LOCALE`, payload: { locale } }

reducer
// keep your state up to date

Loc
// connected React Native component (Text) on I18n.locale
// <Loc locKey="greetings" whatever="..." />
```

## Configure :

```javascript
// app/i18n/index.js
  import I18n from 'react-native-redux-i18n'
  import translations from './translations'

  I18n.fallbacks = true
  I18n.translations = translations

  export default I18n

// app/i18n/translations/en.json
  {
    "greetings": "Hello {{name}}",
    "age": {
      "one": "1 year old.",
      "other": "{{count}} years old ... {{more}}",
      "zero": "... seriously ?"
    }
  }

// app/I18n/translations/index.js
  export default {
    en: require('./en.json'),
    // 'en-GB': require('./en-GB.json'),
    fr: require('./fr.json'),
  }

// app/store/index.js
import { createStore, combineReducers } from 'redux'
...

import { reducer as i18n } from 'react-native-redux-i18n'
...

export default createStore(combineReducers(i18n, ...))

// app/index.js
  import i18n from 'app/i18n'
  import store from 'app/store'
  ...
```

## Usage :

```javascript
// app/scenes/Home.js
  import { connect } from 'react-redux'
  import React from 'react'
  ...
  import { Loc, setLocale } from 'react-native-redux-i18n'

  const Home = () => (
    <View>
      <Text><Loc locKey="greetings" name="Matthieu" /></Text>
      <Text><Loc locKey="age" count={27} more="blablabla" /></Text>

      <Button onPress={() => setLocale('en-EN')}>en-EN</Button>
      <Button onPress={() => setLocale('fr')}>fr</Button>
    </View>
  )

  const mapStateToProps = () => ({})
  const mapDispatchToProps = dispatch => ({
    setLocale: (locale) => dispatch(setLocale(locale))
  })

  export default connect(mapStateToProps, mapDispatchToProps)(Home)

```

Also you can use it as described in `react-native-i18n`

```javascript
// app/index.js

import I18n from 'react-native-redux-i18n'

class Demo extends React.Component {
  render () {
    return (
      <Text>{I18n.t('greeting')}</Text>
    )
  }
}

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true

I18n.translations = {
  en: {
    greeting: 'Hi!'
  },
  fr: {
    greeting: 'Bonjour!'
  }
}
```

or use `I18n` directly as described in [https://github.com/fnando/i18n-js](https://github.com/fnando/i18n-js)

## Licence

MIT

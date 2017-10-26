import I18n from 'react-native-i18n'

I18n.defaultLocale = 'en'
I18n.fallbacks = true

export * from './actions'
export { default as reducer } from './reducer'
export { default as Loc } from './Loc'

export default I18n

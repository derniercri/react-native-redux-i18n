import I18n from 'react-native-i18n'
import { SET_LOCALE } from './actions'

const initialState = {
  locale: I18n.defaultLocale,
}

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case SET_LOCALE:
      const { locale } = action.payload

      I18n.locale = locale
      return {
        ...state,
        locale,
      }
    default:
      return state
  }
}

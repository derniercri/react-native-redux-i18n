import I18n from 'react-native-i18n'
import { SET_LOCALE, SET_TRANSLATIONS } from './actions'

const initialState = {
  locale: I18n.currentLocale(),
  version: null,
  toggle: false,
}

export default function reducer(state = initialState, action = {}) {
  const { payload } = action

  switch (action.type) {
    case SET_LOCALE:
      I18n.locale = payload.locale

      return {
        ...state,
        locale: payload.locale,
      }
    case SET_TRANSLATIONS:
      const { translations } = payload
      I18n.translations = translations

      return {
        ...state,
        version: translations._version || state.version,
        toggle: !state.toggle,
      }
    default:
      return state
  }
}

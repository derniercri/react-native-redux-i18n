import I18n from 'react-native-i18n'
import { SET_LOCALE } from './actions'

const initialState = {
  locale: I18n.defaultLocale,
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_LOCALE:
      return {
        ...state,
        locale: action.payload.locale,
      }
    default:
      return state
  }
}

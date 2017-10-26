import I18n from 'react-native-i18n'
export const SET_LOCALE = 'SET_LOCALE'

export const setLocale = locale => {
  I18n.locale = locale

  return {
    type: SET_LOCALE,
    payload: { locale },
  }
}

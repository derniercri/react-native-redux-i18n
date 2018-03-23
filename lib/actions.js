export const SET_LOCALE = 'SET_LOCALE'
export const SET_TRANSLATIONS = 'SET_TRANSLATIONS'

export const setLocale = locale => ({
  type: SET_LOCALE,
  payload: { locale },
})

export const setTranslations = translations => ({
  type: SET_TRANSLATIONS,
  payload: { translations },
})

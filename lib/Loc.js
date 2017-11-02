import React from 'react'
import PropTypes from 'prop-types'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'
import { Text } from 'react-native'

const Loc = ({ locKey, customizer, ...props }) => (
  <Text>{customizer(I18n.t(locKey, props))}</Text>
)

Loc.defaultProps = {
  customizer: text => text,
}

Loc.propTypes = {
  customizer: PropTypes.func,
  locKey: PropTypes.any.isRequired,
}

const mapStateToProps = ({ i18n }) => ({
  locale: i18n.locale,
})

export default connect(mapStateToProps)(Loc)

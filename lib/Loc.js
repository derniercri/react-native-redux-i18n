import React, { Component } from 'react'
import PropTypes from 'prop-types'
import I18n from 'react-native-i18n'
import { connect } from 'react-redux'
import { Text } from 'react-native'

class Loc extends Component {
  shouldComponentUpdate({ locKey, version }) {
    return this.props.locKey != locKey || this.props.version != version
  }

  render() {
    const { locKey, customizer, ...props } = this.props

    return <Text>{customizer(I18n.t(locKey, props))}</Text>
  }
}

Loc.defaultProps = {
  customizer: text => text,
}

Loc.propTypes = {
  customizer: PropTypes.func,
  locKey: PropTypes.any.isRequired,
}

const mapStateToProps = ({ i18n }) => ({
  locale: i18n.locale,
  version: i18n.version,
})

export default connect(mapStateToProps)(Loc)

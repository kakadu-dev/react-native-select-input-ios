import PropTypes from 'prop-types'
import { TextStylePropTypes } from 'react-native'

export default {
  onPress: PropTypes.func.isRequired,
  style: PropTypes.oneOfType([
    PropTypes.arrayOf(TextStylePropTypes)
  ]),
  text: PropTypes.string.isRequired,
  textAlign: PropTypes.string.isRequired
}

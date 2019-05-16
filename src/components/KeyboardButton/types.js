import PropTypes from 'prop-types'
import { Text } from 'react-native'

export default {
  onPress: PropTypes.func.isRequired,
  style: Text.propTypes.style,
  text: PropTypes.string.isRequired,
  textAlign: PropTypes.string.isRequired
}

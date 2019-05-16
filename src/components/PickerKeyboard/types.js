import PropTypes from 'prop-types'
import { Text, ViewPropTypes } from 'react-native'

export default {
  buttonsTextStyle: Text.propTypes.style,
  buttonsViewStyle: PropTypes.oneOfType([
    ViewPropTypes.style,
    PropTypes.arrayOf(ViewPropTypes.style)
  ]),
  pickerItemStyle: Text.propTypes.style,
  pickerViewStyle: PropTypes.oneOfType([
    ViewPropTypes.style,
    PropTypes.arrayOf(ViewPropTypes.style)
  ]),
  cancelKeyText: PropTypes.string,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  onValueChange: PropTypes.func,
  options: PropTypes.array,
  submitKeyText: PropTypes.string,
  value: PropTypes.any
}

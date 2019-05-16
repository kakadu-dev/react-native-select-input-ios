import PropTypes from 'prop-types'
import { Text, ViewPropTypes } from 'react-native'

import selectInputPropTypes from '../AbstractSelectInput/types.js'

export default {
  ...selectInputPropTypes,
  cancelKeyText: PropTypes.string,
  submitKeyText: PropTypes.string,
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
  style: PropTypes.oneOfType([
    ViewPropTypes.style,
    PropTypes.arrayOf(ViewPropTypes.style)
  ])
}

export const defaultProps = {
  enabled: true,
  cancelKeyText: 'Cancel',
  options: [{ value: 0, label: '0' }],
  submitKeyText: 'Done',
  value: 0
}

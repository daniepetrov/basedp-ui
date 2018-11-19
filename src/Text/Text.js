import styled from 'styled-components'
import {
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  style,
  textStyle,
} from 'styled-system'

import Box from './../Box'

const textTransform = style({
  // React prop name
  prop: 'textTransform',
})

const Text = styled(Box)(
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  textTransform,
  textStyle,
  props => props.theme.Text
)

Text.propTypes = {
  ...fontFamily.propTypes,
  ...fontWeight.propTypes,
  ...textAlign.propTypes,
  ...lineHeight.propTypes,
  ...letterSpacing.propTypes,
  ...textStyle.propTypes,
}

Text.displayName = 'Text'

export default Text

import styled from 'styled-components'
import {
  space,
  width,
  fontSize,
  color,
  flex,
  order,
  alignSelf,
  height,
  fontWeight,
  borders,
  borderColor,
  borderRadius,
  boxShadow,
  textStyle,
  buttonStyle,
  minWidth,
  lineHeight,
  style,
} from 'styled-system'

const baseStyles = {
  display: 'inline-flex',
  position: 'relative',
  appearance: 'none',
  userSelect: 'none',
  outline: 'none',
  textDecoration: 'none',
  cursor: 'pointer',
  justifyContent: 'center',
  alignItems: 'center',
  verticalAlign: 'middle',
  textAlign: 'center',
  margin: '0',
  padding: '0',
  borderRadius: '0',
  border: '0',
  color: 'inherit',
  backgroundColor: 'transparent',
}

const textTransform = style({
  prop: 'textTransform',
})

export const Button = styled('button')(
  baseStyles,
  textTransform,
  textStyle,
  buttonStyle,
  space,
  width,
  fontSize,
  lineHeight,
  color,
  flex,
  order,
  alignSelf,
  height,
  fontWeight,
  borders,
  borderColor,
  borderRadius,
  boxShadow,
  minWidth,
  props => props.theme.Button,
  props => props.css
)

Button.propTypes = {
  ...minWidth.propTypes,
  ...textStyle.propTypes,
  ...buttonStyle.propTypes,
  ...space.propTypes,
  ...width.propTypes,
  ...height.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
  ...minWidth.propTypes,
  ...boxShadow.propTypes,
  ...fontWeight.propTypes,
  ...borders.propTypes,
  ...borderColor.propTypes,
  ...borderRadius.propTypes,
}

Button.displayName = 'Button'

export default Button

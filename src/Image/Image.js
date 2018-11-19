import styled from 'styled-components'
import { height, borderRadius } from 'styled-system'
import { maxWidth } from 'styled-system'
import Box from './../Box'

const maxWidthCustom = props => props.height === 'auto' && maxWidth

export const Image = styled(Box)(
    {
        display: 'block',
    },
    height,
    maxWidthCustom,
    borderRadius,
    props => props.theme.Image
)

Image.propTypes = {
    ...height.propTypes,
    ...borderRadius.propTypes,
    ...maxWidth.propTypes
}

Image.defaultProps = {
    maxWidth: '100%',
    height: 'auto',
    as: 'img',
    m: 0
}

Image.displayName = 'Image'

export default Image

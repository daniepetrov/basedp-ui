import styled from 'styled-components'
import { space, width, fontSize, color, flex, order, alignSelf } from 'styled-system'

const Box = styled('div')(
    space,
    width,
    fontSize,
    color,
    flex,
    order,
    alignSelf,
    props => props.theme.Box,
    props => props.css
)

Box.displayName = 'Box'

Box.propTypes = {
    ...space.propTypes,
    ...width.propTypes,
    ...fontSize.propTypes,
    ...color.propTypes
}

export default Box

import styled from 'styled-components'
import { position, zIndex, top, right, bottom, left, style } from 'styled-system'

import Box from './../Box'

const transform = style({
    prop: 'transform',
    cssProperty: 'transform',
})

const Position = styled(Box)(position, zIndex, top, right, bottom, left, transform)

Position.displayName = 'Position'

export default Position

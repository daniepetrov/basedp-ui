import styled from 'styled-components'
import { style } from 'styled-system'

import Box from './../Box'

const textDecoration = style({
    prop: 'textDecoration',
})

const Link = styled(Box)({ cursor: 'pointer' }, textDecoration, props => props.theme.Link)

Link.defaultProps = {
    as: 'a',
    color: 'blue',
}

Link.displayName = 'Link'

export default Link

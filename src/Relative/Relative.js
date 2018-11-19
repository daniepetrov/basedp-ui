import styled from 'styled-components'

import Position from './../Position'

const Relative = styled(Position)([])

Relative.displayName = 'Relative'

Relative.defaultProps = {
    position: 'relative',
}

export default Relative

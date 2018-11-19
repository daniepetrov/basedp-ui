import styled from 'styled-components'

import Position from './../Position'

const Absolute = styled(Position)([])

Absolute.defaultProps = {
  position: 'absolute',
}

Absolute.displayName = 'Absolute'

export default Absolute

import styled from 'styled-components'
import Position from './../Position'

const Fixed = styled(Position)([])

Fixed.defaultProps = {
    position: 'fixed',
}

Fixed.displayName = 'Fixed'

export default Fixed

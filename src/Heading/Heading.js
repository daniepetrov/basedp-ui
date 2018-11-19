import styled from 'styled-components'

import Text from './../Text'

const Heading = styled(Text)(props => props.theme.Heading)

Heading.defaultProps = {
  as: 'h2',
  m: 0,
  fontWeight: 'bold',
}

Heading.displayName = 'Heading'

export default Heading

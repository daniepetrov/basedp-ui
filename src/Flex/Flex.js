import styled from 'styled-components'
import { flexWrap, flexDirection, alignItems, justifyContent } from 'styled-system'
import Box from './../Box'

const Flex = styled(Box)(
  {
    display: 'flex',
  },
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  props => props.theme.Flex
)

Flex.displayName = 'Flex'

Flex.propTypes = {
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
  ...alignItems.propTypes,
  ...justifyContent.propTypes,
}

export default Flex

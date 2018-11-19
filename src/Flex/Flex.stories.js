import React from 'react'
import { storiesOf } from '@storybook/react'

import { Box, Flex } from './../index'

storiesOf('Components/Flex', module).add('default', () => (
  <Flex p={3} bg="#f2f2f2">
    <Box width={1 / 2} m={1} p={1} bg="lightblue">
      Box 1
    </Box>
    <Box width={1 / 2} m={1} p={1} bg="lightblue">
      Box 2
    </Box>
  </Flex>
))

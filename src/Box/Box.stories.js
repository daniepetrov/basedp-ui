import React from 'react'
import { storiesOf } from '@storybook/react'

import { Box } from './../index'

storiesOf('Components/Box', module)
  .add('default', () => <Box bg="lightblue">Box</Box>)
  .add('with width', () => (
    <Box width={1 / 2} bg="lightblue">
      Box
    </Box>
  ))
  .add('with space', () => (
    <Box p={'20px'} m={'10px'} bg="lightblue">
      Box
    </Box>
  ))
  .add('with space from theme', () => (
    <Box p={3} m={3} bg="lightblue">
      Box
    </Box>
  ))

  .add('with bg from theme', () => (
    <Box bg="primary.base" color="neutral.white">
      Box
    </Box>
  ))

  .add('with color from theme', () => (
    <Box color="info.base" bg="lightblue">
      Box
    </Box>
  ))

  .add('with responsive width', () => (
    <Box width={[1, 1 / 2, 1 / 4]} bg="lightblue">
      Box
    </Box>
  ))

  .add('with responsive bg', () => <Box bg={['tomato', 'lightblue', 'skyblue']}>Box</Box>)

  .add('with responsive bg from theme', () => (
    <Box bg={['primary.base', 'primary.200', 'primary.800']}>Box</Box>
  ))

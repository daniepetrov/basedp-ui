import React from 'react'
import { storiesOf } from '@storybook/react'

import { Box, Heading } from './../index'

storiesOf('Components/Heading', module)
  .add('default', () => <Heading>Привет</Heading>)
  .add('with as prop (h1-h6)', () => (
    <Box>
      <Heading as="h1">This is a h1 element</Heading>
      <Heading as="h2">This is a h2 element</Heading>
      <Heading as="h3">This is a h3 element</Heading>
      <Heading as="h4">This is a h4 element</Heading>
      <Heading as="h5">This is a h5 element</Heading>
      <Heading as="h6">This is a h6 element</Heading>
    </Box>
  ))

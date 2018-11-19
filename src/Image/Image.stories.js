import React from 'react'
import { storiesOf } from '@storybook/react'

import { Box, Image } from './../index'

storiesOf('Components/Image', module)
    .add('default', () => (
        <Box width={0.8}>
            <Image alt="kitten" src="http://placekitten.com/500/300" />
        </Box>
    ))
    .add('explicit width/height', () => (
        <Image alt="kitten" src="http://placekitten.com/500/300" width={300} height={180} />
    ))

import React from 'react'
import { storiesOf } from '@storybook/react'

import { Card, Box, Heading } from './../index'

storiesOf('Components/Card', module)
    .add('default', () => (
        <Card
            fontSize={6}
            fontWeight="bold"
            width={[1, 1, 1 / 2]}
            height="300px"
            p={5}
            my={5}
            bg="#f6f6ff"
            borderRadius={8}
            boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
        >
            Card
        </Card>
    ))

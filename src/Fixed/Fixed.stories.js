import React from 'react'
import { storiesOf } from '@storybook/react'

import Fixed from './Fixed'

storiesOf('Components/Fixed', module).add('default', () => (
    <Fixed top="40px" left="50px" bg="lightblue" width='200px'>
        Привет
    </Fixed>
))

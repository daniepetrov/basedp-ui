import React from 'react'
import { storiesOf } from '@storybook/react'

import Relative from './Relative'

storiesOf('Components/Relative', module).add('default', () => (
    <Relative top='10px' bg="lightblue">
        Привет
    </Relative>
))

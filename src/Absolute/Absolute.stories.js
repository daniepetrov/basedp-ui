import React from 'react'
import { storiesOf } from '@storybook/react'

import Absolute from './Absolute'

storiesOf('Components/Absolute', module).add('default', () => (
    <div style={{ background: '#e5e5e5', height: '100px', position: 'relative' }}>
        <Absolute top="40px" left="50px" bg="lightblue">
            Привет
        </Absolute>
    </div>
))

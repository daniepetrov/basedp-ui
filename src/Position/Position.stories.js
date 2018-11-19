import React from 'react'
import { storiesOf } from '@storybook/react'

import Position from './Position'

storiesOf('Components/Position', module).add('default', () => (
    <div style={{ background: '#e5e5e5', height: '100px' }}>
        <Position bg="lightblue" position="relative" top="20px" width='300px' left="40px">
            Привет
        </Position>
    </div>
))

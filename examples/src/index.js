import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'LandingContext'
import { Box } from './../../src'

const App = () => (
  <Provider value={{ locale: 'RU' }}>
    <Box color="red">Clam</Box>
  </Provider>
)

render(<App />, document.getElementById('root'))

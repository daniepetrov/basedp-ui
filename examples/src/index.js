import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'LandingContext'
// import { Box } from './../../src'
import { Box } from './../../dist'

const App = () => (
  <Provider value={{ locale: 'RU' }}>
    <Box color="red" bg="blue">
      Clam
    </Box>
  </Provider>
)

render(<App />, document.getElementById('root'))

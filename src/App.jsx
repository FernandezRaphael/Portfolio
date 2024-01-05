import './index.scss'
import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'

import Home from './Home'

const StyledApp = styled.div`
  width: 100%;
  height: 100vh;
`

function App() {

  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
    </Routes>
  )
}

export default App

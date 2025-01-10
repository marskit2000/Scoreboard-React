import { useState } from 'react'
import './App.css'

import Scorecard from './components/scorecard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Scorecard />
    </>
  )
}

export default App

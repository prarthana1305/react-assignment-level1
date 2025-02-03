import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MoodTracker from './MoodTracker'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MoodTracker/>
    </>
  )
}

export default App

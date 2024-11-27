import { useState } from 'react'
import Work from './components/Work';
import  "./App.css"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Work />
    </>
  )
}

export default App

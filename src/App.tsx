import { useState } from 'react'
import './App.css'
import { Button } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hoge</h1>
      <div className="card">
        <Button
          colorScheme='blue'
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
      </div>
    </div>
  )
}

export default App

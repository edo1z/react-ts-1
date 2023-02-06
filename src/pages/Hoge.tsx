import { useState } from 'react'
import { Button } from '@chakra-ui/react'

function Hoge() {
  const [count, setCount] = useState(0)
  return (
    <div>
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
export default Hoge

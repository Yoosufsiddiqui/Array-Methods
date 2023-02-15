import { useState } from 'react'
import './App.css'
import ArrayFilter from './components/ArrayFilter'
import ArrayMap from './components/ArrayMap'
import ArrayReduce from './components/ArrayReduce'
import ArraySort from './components/ArraySort'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='mb-2'> <strong> Product Array Mapped :</strong> <ArrayMap /> </div>
      <div className='py-3'><ArrayReduce /> </div>
      <div> <strong>Filtered Array:</strong> <ArrayFilter /> </div>
      <div className='mt-3'> <strong>Sorted Array in Ascending order:</strong> <ArraySort/> </div>
    </div>
  )
}

export default App

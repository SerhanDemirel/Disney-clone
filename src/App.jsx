import { useState } from 'react'
import Header  from './Components/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
      <Header/>
      </div>
    </>
  )
}

export default App

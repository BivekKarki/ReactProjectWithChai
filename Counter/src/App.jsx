import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count, setCount] =useState(0);

  const addValue = ()=> {
    if (count <20){
      setCount(count+1)
    }else {
      setCount(count)
    }
    
  }
  const decValue = ()=> {
    if (count>0){
      setCount(count-1)
    }else{
      setCount(count)
    }
    
  }

  return (
    <>
      <h1> Hello there </h1>
      <h2>Counter value : {count}</h2>

      <button 
      onClick={addValue}
      >Add Value</button>
      <button
      onClick={decValue}
      >Dec Value</button>
    </>
  )
}

export default App

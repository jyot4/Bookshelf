import React, { useState } from 'react'

function Counter() {

    const [counter,setCounter] = useState(0)

    function inc(){
        setCounter(counter+1)
    }

    function dec(){
        setCounter(counter-1)
    }
  return (
    <div>
      <button onClick={inc}>inc</button>
      <p>{counter}</p>
      <button  onClick={dec}> dec</button>
    </div>
  )
}

export default Counter

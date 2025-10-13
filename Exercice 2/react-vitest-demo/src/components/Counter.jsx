import React, { useState } from 'react'

export default function Counter() {
    const [count,setCount] = useState(0)
  return (
    <div>
        <p>Valeur : {count}</p>
        <button onClick={() => setCount(c => c+1)}>Incrémenter</button>
    </div>
  )
}

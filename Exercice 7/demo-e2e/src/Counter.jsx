import React, { useState } from 'react'

export default function Counter() {
    const [count,setCount] = useState(0)
  return (
    <div>
        <h1>Compteur</h1>
        <p data-testid="count-value">Valeur : {count}</p>
        <button onClick={() => setCount(count + 1)}>incrementer</button>
        <button onClick={() => setCount(0)}>reset</button>
    </div>
  )
}

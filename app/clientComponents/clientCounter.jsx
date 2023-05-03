"use client"

import { counter } from '../store/store'

export default  function ClientCounter() {

  /**
    Si no se utilizan todos los datos del estado:
    const count = counter(s => s.count)
    const add = counter(s => s.add)
    const sub = counter(s => s.sub)
    const reset = counter(s => s.reset)
  */
  const {count, add, sub, reset} = counter()

  console.log("Render client counter")

  return (
    <>
      <button onClick={add}>Client Component Add: {count}</button>
      <button onClick={sub}>Client Component Sub: {count}</button>
      <button onClick={reset}>Client Component Reset: {count}</button>
    </>
  )
}
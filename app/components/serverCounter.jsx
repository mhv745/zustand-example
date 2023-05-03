import { counter } from '../store/store'

export default function ServerCounter() {
    const count = counter.getState().count
    
    console.log("Render server counter", count)

    return <h1>ServerCounter: {count}</h1>
}
"use client"

import { useEffect } from 'react'
import { theme } from '../store/store'

export default function ClientTheme(){
    const {color, toggle} = theme()

    useEffect(() => {
        const oldColor = color === "dark" ? "light" : "dark"
        document.body.classList.replace(oldColor, color)
    }, [color])
    
    console.log("Render client theme", color)

    return <button onClick={toggle}>Client Component: {color}</button>

}
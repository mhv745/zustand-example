"use client"

import { useRef } from 'react'
import { theme } from './store'

export default function ConnectTheme({data}) {
    const initialized  = useRef(false)

    if (!initialized.current) {
        initialized.current = true
        theme.setState(data)
    }


    return null
}
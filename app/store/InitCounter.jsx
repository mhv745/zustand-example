"use client"

import { useRef } from 'react'
import { counter } from './store'

export default function InitTheme({data}) {
    const initialized  = useRef(false)

    if (!initialized.current) {
        counter.setState(data)
        initialized.current = true
    }

    return null
}
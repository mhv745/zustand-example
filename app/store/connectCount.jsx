"use client"

import { useRef } from 'react'
import { counter } from './store'

export default function ConnectCount({data}) {
    const initialized  = useRef(false)

    if (!initialized.current) {
        counter.setState(data)
        initialized.current = true
    }

    return null
}
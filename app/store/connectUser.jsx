"use client"

import { useRef } from 'react'
import { user } from './store'

export default function ConnectCount({data}) {
    const initialized  = useRef(false)

    if (!initialized.current) {
        user.setState(data)
        initialized.current = true
    }

    return null
}
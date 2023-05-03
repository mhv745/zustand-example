"use client"

import { counter, theme, user } from '../store/store'

export default function InfoClient(){

    const userName = user(s => s.name)
    const themeColor = theme(s => s.color)
    const count = counter(s => s.count)

    return (
        <p>
            <span>{userName}</span>
            <span>{themeColor}</span>
            <span>{count}</span>
        </p>
    )
}
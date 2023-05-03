"use client"

import { user } from '../store/store'

export default function ClientUser(){
    const userName = user(s => s.name)
    
    const auth = () => {
        user.setState({name: userName ? "" : "Jhon Doe"})
    }

    return (
        <>
            <span>Hi {userName || "Guest"}</span>
            <button type='button' onClick={auth}>
                {userName ? "logout" : "login"}
            </button>
        </>
    )
}
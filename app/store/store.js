import { create, createStore, useStore } from 'zustand'
import { shallow, subscribeWithSelector } from 'zustand/middleware'


export const theme = create((set) =>({
    color: "light",
    toggle: () => set(state => ({color: state.color === "dark" ? "light" : "dark"}))
}))

export const counter = create((set) =>({
    count: 0,
    add: () => set(state => ({count: state.count + 1})),
    sub: () => set(state => ({count: state.count - 1})),
    reset: () => set({count: 0})
}))

export const user = create((set) =>({
    name: "John Doe",
    setName: (name) => set({name})
}))

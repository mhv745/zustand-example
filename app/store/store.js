import { create } from 'zustand'

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
    name: "",
    setName: (name) => set({name})
}))

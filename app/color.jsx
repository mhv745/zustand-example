"use client"

import { theme } from './store/store'

const Color = () => <span>{theme(s => s.color)}</span>

export default Color
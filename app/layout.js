import './globals.css'
import { default as InitCounter, default as InitTheme } from './store/InitTheme'
import { counter, theme } from './store/store'

const URL = "http://localhost:3000/api/theme"

export default async function RootLayout({ children }) {
  const themeState = await fetch(URL).then(res => res.json())
  const counterState = {count: 100}

  
  theme.setState(themeState, true)  
  counter.setState(counterState)
  
  console.log("Render layout", themeState, counterState)
  
  return (
    <html lang="en">
      <body className={themeState.color}>
        <InitTheme data={themeState} />
        <InitCounter data={counterState} />
        {children}
      </body>
    </html>
  )
}

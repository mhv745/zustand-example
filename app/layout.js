import './globals.css'
import InitCounter from './store/InitCounter'
import InitTheme from './store/InitTheme'
import { counter, theme, user } from './store/store'

const URL_THEME = "http://localhost:3000/api/theme"
const URL_AUTH = "http://localhost:3000/api/auth"

export default async function RootLayout({ children }) {
  const userState = await fetch(URL_AUTH).then(res => res.json())
  const themeState = await fetch(URL_THEME).then(res => res.json())
  const counterState = {count: 100}
  
  theme.setState(themeState, true)  
  counter.setState(counterState)
  user.setState(userState)
  
  console.log("Render layout", themeState, counterState)
  
  return (
    <html lang="en">
      <body className={themeState.color}>
        <InitTheme data={themeState} />
        <InitCounter data={counterState} />
        {userState.user && <p>Welcome {userState.user}</p>}
        {children}
      </body>
    </html>
  )
}

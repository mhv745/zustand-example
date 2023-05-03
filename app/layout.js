import './globals.css'
import Navigation from './serverComponents/navigation'
import ConnectCount from './store/connectCount'
import ConnectTheme from './store/connectTheme'
import ConnectUser from './store/connectUser'
import { counter, theme, user } from './store/store'

const URL_THEME = "http://localhost:3000/api/theme"
const URL_AUTH = "http://localhost:3000/api/auth"

export default async function RootLayout({ children }) {
  const userState = await fetch(URL_AUTH).then(res => res.json())
  const themeState = await fetch(URL_THEME).then(res => res.json())
  const counterState = {count: 100}
  
  theme.setState(themeState)  
  counter.setState(counterState)
  user.setState(userState)
  
  console.log("Render layout", themeState, counterState)
  
  return (
    <html lang="en">
      <body className={themeState.color}>
        <ConnectTheme data={themeState} />
        <ConnectCount data={counterState} />
        <ConnectUser data={userState} />
        <Navigation />
        {children}
      </body>
    </html>
  )
}

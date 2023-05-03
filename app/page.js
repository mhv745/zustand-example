
import ClientCounter from './components/clientCounter'
import ClientTheme from './components/clientTheme'
import ServerCounter from './components/serverCounter'
import ServerTheme from './components/serverTheme'
import { theme } from './store/store'

export default async function Home() {
  const {color} = theme.getState(({color}) => color)
  
  console.log("Render Home", color)

  return (
    <main>
        <ServerTheme />
        <ClientTheme />
        <hr />
        <ServerCounter />
        <ClientCounter />
    </main>
  )
}

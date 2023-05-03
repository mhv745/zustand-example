
import ClientCounter from './components/clientCounter'
import ClientTheme from './components/clientTheme'
import ServerCounter from './components/serverCounter'
import ServerTheme from './components/serverTheme'

export default function Home() {
  
  console.log("Render Home")

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

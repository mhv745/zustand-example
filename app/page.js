
import ClientCounter from './clientComponents/clientCounter'
import ClientTheme from './clientComponents/clientTheme'
import ClientUser from './clientComponents/clientUser'
import ServerCounter from './serverComponents/serverCounter'
import ServerTheme from './serverComponents/serverTheme'

export default function Home() {
  
  console.log("Render Home")

  return (
    <main>
        <ServerTheme />
        <ClientTheme />
        <hr />
        <ServerCounter />
        <ClientCounter />
        <hr />
        <ClientUser />
    </main>
  )
}

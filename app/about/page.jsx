import ClientCounter from '../clientComponents/clientCounter'
import ClientTheme from '../clientComponents/clientTheme'
import ClientUser from '../clientComponents/clientUser'
import ServerCounter from '../serverComponents/serverCounter'
import ServerTheme from '../serverComponents/serverTheme'

export default function AboutPage(){

    return (
        <>
            <h1>About Page</h1>
            <hr />
            <ServerTheme />
            <ClientTheme />
            <hr />
            <ServerCounter />
            <ClientCounter />
            <hr />
            <ClientUser />

        </>
    )
}
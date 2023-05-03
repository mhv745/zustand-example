import Link from 'next/link'
import ClientUser from '../clientComponents/clientUser'
import { user } from '../store/store'

export default function Navigation({}){

    return <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <ClientUser />
    </nav>

}
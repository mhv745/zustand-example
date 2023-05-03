import { theme } from '../store/store'

export default function ServerTheme(){
    const color = theme.getState().color

    console.log("ServerTheme",color)
    
    return <div className="">
        <h1>Server Theme Color: {color}</h1>
    </div>
}
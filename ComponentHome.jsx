import { useState } from "react"


export const ComponentHome = () => {

    const [counter, setCounter] = useState( 10 )

    const clickHandler = ()=>{

        setCounter( counter +10 )

    }

    const decreaseHandler = ()=>{

        setCounter( counter -10 )

    }

    return (
        <>
            <h1>Home</h1>
        </>
    )

} 
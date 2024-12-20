import { useEffect, useState } from "react"
import { Display } from "./Display"
import { Button } from "./Button"
///////////////////////////
export function Counterdor() {



    const [state, setState] = useState(15)



    ///////////////////////////
    const handleIncrement = () => {
        setState((previousValor) => previousValor + 1)
    }
    const handleDecrement = () => {

        setState((previousValor) => previousValor - 1)
    }
    ///////////////////////////

    return (
        <div>
            <Display value={state} />
            <Button quandoSeClica={handleIncrement}>+</Button>
            <Button quandoSeClica={handleDecrement}>-</Button>
        </div>
    )
}
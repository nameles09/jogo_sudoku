import { useEffect, useState } from "react"

export function Counter() {

   useEffect(() => {
    // ComponentDidMount
    // Imediatamente apos o componente aparecer no ecrã
    console.log("OLA")
   })
    

    // let valor = 0;
    const [valor, setValor] = useState(0)

    const handleIncrement = () => {
        // setValor(valor + 1) //1
        setValor((previousValor) => previousValor + 1)
    }
    const handleDecrement = () => {
        // setValor(valor - 1) //1
        setValor((previousValor) => previousValor - 1)
    }


    return (
        <div>
            <p>{valor}</p>
            <button
                onClick={handleIncrement}>
                +
            </button>
            
            <button disabled={valor <= 0}
                onClick={handleDecrement}>
                -
            </button>
        </div>
    )
}
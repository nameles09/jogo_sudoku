// Cria um componente (Utilizando React) com:

// Um título: "Gerador de Números"
// Um botão com o conteúdo "Gerar"
// Um parágrafo com o valor gerado. No início deve dizer "Clique em Gerar"
// Faz com que ao clicar no botão, o valor presente no parágrafo seja alterado para um novo valor aleatório.

import { useEffect, useState } from "react"

export function GeradorDeNumeros() {
    const [state, setState] = useState({
        value: "Clique em gerar",
        maxLimit: 10
    })
    const handleClick = () => {
        setState(previousState => (
            {
                ...previousState,
                value: Math.floor(Math.random() * (state.maxLimit + 1))
            }
        ))
    }

    const handleChange = (newValue) => {
        setState(previousState => (
            {
                ...previousState,
                maxLimit: Number(newValue)
            }
        ))
    }


    return (
        <div>
            <p>{state.value}</p>
            <input type="number" value={state.maxLimit} onChange={(e) => handleChange(e.target.value)} />
            <button
                onClick={handleClick}>
                Gerar
            </button>
        </div>
    )
}
import { useState } from "react"

export function Formulario() {
    const [state, setState] = useState({
        username: "",
        password: ""
    })

    const handleClick = () => {
        console.log(state)
    }
    const handleChange = (event, fieldName) => {
        //Recebemos o evento do on change, dentro do event temos o .target.value que representa o que utilizador introduziu
        //Também recebemos o fieldName, que é a propriedade que queremos mudar (qual é o campo em que foi introduzido valor)

        setState((pState) => ({ ...pState, [fieldName]: event.target.value }))
    }

    return (
        <div>
            <input onChange={(e) => handleChange(e, "username")} />
            <input type="password" onChange={(e) => handleChange(e, "password")} />
            <button type="button" onClick={handleClick} >Submeter</button>
        </div>
    )
}
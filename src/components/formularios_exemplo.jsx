import { useState } from "react"

export function FormularioExemplo() {
    const [state, setState] = useState({
        email: "claribela@maild",
        password: ""
    })

    const handleChange = (event) => {
        const fieldName = event.target.name
        setState((previousState) => ({ ...previousState, [fieldName]: event.target.value }))
    }



    return (
        <div>


            <input
                type="email"
                name="email"
                onChange={handleChange}
                value={state.email} />
            <textarea

                name="motivationLetter"
                onChange={handleChange}
                value={state.motivationLetter} />
            <input
                name="password"
                onChange={handleChange}
                value={state.password}
                type="password" />
            <button type="button" >Submeter</button>
        </div>
    )
}
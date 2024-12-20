import { useEffect, useState } from "react";

export function useClock() {
    const [state, setState] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setState(new Date())
        }, 1000)
    }, [])

    return (
        state
    )
}
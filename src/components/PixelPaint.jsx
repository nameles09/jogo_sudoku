import { useState } from "react"
import styles from "../styles/PixelPaint.module.css"

const LENGTH = 10
const initialMatrix = new Array(LENGTH).fill("").map(e => new Array(LENGTH).fill("#fff"))
export function PixelPaint() {
    const [state, setState] = useState({
        currentColor: "#ff0054",
        board: initialMatrix,
        isPainting: false
    })

    //MA PRATICA; QUIÇÁ ILEGAL
    // const [currentColor, setColor] = useState("ff0054")
    // const [board, setBoard] = useState(initialMatrix)
    // const [isPainting, setIsPainting] = useState(initialMatrix)

    const activatePaint = (i, j) => {
        paint(i, j)
        setState(previousState => (
            { ...previousState, isPainting: true }
        ))
    }

    const handleEnter = (i, j) => {
        if (state.isPainting === false) return
        paint(i, j)
    }

    const deactivatePaint = () => setState(previousState => (
        { ...previousState, isPainting: false }
    ))
    const paint = (i, j) => {
        setState((previousState) => (
            {
                ...previousState,
                board: previousState.board.map((_, row) => _.map((cell, column) => row === i && column === j ? state.currentColor : cell))

            }
        ))
    }

    return (
        <div className={styles.wrapper}>
            {state.board.map((row, i) => (
                <div key={i} className={styles.row}>
                    {row.map((cell, j) => (
                        <div key={`${i} ${j}`}
                            style={{ backgroundColor: cell }}
                            onMouseEnter={() => handleEnter(i, j)}
                            onMouseDown={() => activatePaint(i, j)}
                            onMouseUp={deactivatePaint}
                            className={styles.cell}>

                        </div>
                    ))}
                </div>
            ))}
            <input onChange={e => setState((ps) => ({...ps, currentColor: e.target.value}))} type="color" />
        </div>
    )
}
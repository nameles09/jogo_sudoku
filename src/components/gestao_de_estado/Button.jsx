export function Button(props) {
    return (
        <button onClick={props.quandoSeClica}>
            {props.children}
        </button>
    )
}
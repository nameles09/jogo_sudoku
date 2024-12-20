// // Exercicio 1
// Cria um Componente TaskItem que recebe duas props:

// // concluido: boolean
// // texto: string
// // E apresenta o texto. Se concluido for true, deve apresentar o texto rasurado
export function TaskItem(props) {
    return (
        <li style={{
            textDecoration: props.concluido ? "line-through" : ""
        }}>
            {props.texto}
        </li>
    )
}
///////////////////////////////////////////////////////////////////

export function TaskItem(props) {
    return (
        <div style ={{ textDecoration: props.concluido ? "line-through" : "" }}>
            {texto}
            </div>
}
// // Exercicio 2
// Cria um Componente TaskList que recebe uma prop:



// tasks: um array de objetos com o aspeto seguinte:
// {
//   concluido: boolean,
//   texto: string
// }
// Este componente deve apresentar cada task recorrendo ao componente TaskItem.
// // Exercicio 3
// Acrescenta ao Componente TaskItem uma prop:

// alternaConcluido: função que alterna o concluido.
// Sem adicionar state a este componente, faz com que ao clicar neste componente, a prop concluido alterne entre true e false.
// // Exercicio 4
// Cria um Componente TaskListStats que recebe uma prop:

// tasks: um array de objetos que já conheces
// E apresenta o número total de tarefas concluídas e por concluir.
// // Exercicio 5
// Adiciona ao componente TaskList um state que permite, ao clicar num botão:

// ocultar ou mostrar as tarefas já concluídas
// // Exercicio 6
// Adiciona ao componente TaskItem a possibilidade de modificar o texto de uma task.
// // Exercicio 7
// Adiciona ao componente TaskList a possibilidade de adicionar e remover tarefas.

// Sugestão:
// Podes adicionar um botão ao TaskItem para remover, e passar mais uma prop para passar a função que remove.
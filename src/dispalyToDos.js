import { format, parseISO } from "date-fns"
import expandTodo from "./functions/expandTodo"

const displayToDos = ()=>{
    const to_do_section = document.querySelector(".to-do-section")
    const testDiv = document.createElement("div")
    const allKeys = Object.keys(localStorage)
    let todos = []
    let todo = allKeys.forEach((key)=>{
        let item = localStorage.getItem(key)
        todos.push(JSON.parse(item))
    })
    let i = 0
    while (i< todos.length){
        let todoDiv = document.createElement("div")
        todoDiv.className = "to-do-card"
        let todoHeader = document.createElement("h3")
        todoHeader.textContent = todos[i].title
        todoDiv.appendChild(todoHeader)
        let dueDate = document.createElement("h4")
        let dateToParse = parseISO(todos[i].due)
        let date = format(dateToParse, "dd/MM/yyyy")
        dueDate.textContent = date
        todoDiv.appendChild(dueDate)
        let descriptionDiv = document.createElement("p")
        descriptionDiv.textContent = todos[i].description
        todoDiv.appendChild(descriptionDiv)
        todoDiv.addEventListener("click", ()=> expandTodo(todoHeader.textContent))
        to_do_section.appendChild(todoDiv)
        i++
    }
    
        
}

export {displayToDos}
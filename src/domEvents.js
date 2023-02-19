import newToDo from "./new-to-do"
const appendNewToDo = ()=>{
    const button = document.querySelector(".new-to-do-button")
    const to_do_section = document.querySelector(".to-do-section")
    to_do_section.appendChild(newToDo())
    button.removeEventListener("click", appendNewToDo)
}

export default appendNewToDo
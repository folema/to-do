import newToDo from "./new-to-do"
import { displayToDos } from "./dispalyToDos"
import reminders from "./todoShorts"
const appendNewToDo = ()=>{
    const button = document.querySelector(".new-to-do-button")
    const to_do_section = document.querySelector(".to-do-section")
    while (to_do_section.firstChild)to_do_section.removeChild(to_do_section.firstChild)
    to_do_section.appendChild(newToDo())
    button.removeEventListener("click", appendNewToDo)
}

const startScreen = ()=>{
    const to_do_section = document.querySelector(".to-do-section")
    const button = document.querySelector(".new-to-do-button")
    while (to_do_section.firstChild)to_do_section.removeChild(to_do_section.firstChild)
    button.addEventListener("click", appendNewToDo)
    to_do_section.className = "to-do-section start-screen"
    displayToDos()
    reminders()

}

export {appendNewToDo, 
        startScreen}
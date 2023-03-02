import { formatDistance, formatDistanceToNow, parseISO } from "date-fns"
import { startScreen } from "../domEvents"
import update from "./updateChecklist"
const expandTodo = (todo)=>{
    const to_do_section = document.querySelector(".to-do-section")
    while ( to_do_section.firstChild)to_do_section.removeChild(to_do_section.firstChild)
    const item = localStorage.getItem(todo)
    const itemParsed = JSON.parse(item)
    const toDoDiv = document.createElement("div")
    toDoDiv.className = "to-do"
    const topSection = document.createElement("div")
    topSection.className ="top-section"
    let todoTitle = document.createElement("h3")
    todoTitle.className = "title"
    todoTitle.textContent = itemParsed.title
    topSection.appendChild(todoTitle)
    const closeButton = document.createElement("button")
    closeButton.textContent = "Close"
    closeButton.className = "close-button"
    closeButton.addEventListener("click", ()=>startScreen())
    topSection.appendChild(closeButton)
    toDoDiv.appendChild(topSection)
    let dueDate = document.createElement("h3")
    dueDate.className = "due-date"
    let parseDueDate = parseISO(itemParsed.due)
    let date = formatDistanceToNow(parseDueDate)
    dueDate.textContent = date
    toDoDiv.appendChild(dueDate)
    let description = document.createElement("h4")
    description.className = "description"
    description.textContent = itemParsed.description
    toDoDiv.appendChild(description)
    let important = document.createElement("div")
    if (itemParsed.important ===true)
        {important.className = "importancy-button"
        important.textContent ="Urgent"}
    else {important.className = "importancy-button"
         important.style.backgroundColor = "white"
        important.style.color = "black"
        important.textContent = "Regular"}
        toDoDiv.appendChild(important)
    let to_do_type = document.createElement("div")
    to_do_type.className = "to-do-type"
    if (itemParsed.work === true){
        let work = document.createElement("div")
        work.className = "work"
        work.textContent = "Work"
        to_do_type.appendChild(work)
    }
    if (itemParsed.family === true){
        let family = document.createElement("div")
        family.className = "family"
        family.textContent = "Family"
        to_do_type.appendChild(family)
    }
    if (itemParsed.personal === true){
        let personal = document.createElement("div")
        personal.className = "personal"
        personal.textContent = "Personal"
        to_do_type.appendChild(personal)
    }
    toDoDiv.appendChild(to_do_type)
    let notesDiv = document.createElement("div")
    notesDiv.className = "notes"
    let notes = document.createElement("div")
    notes.className = "notes-text"
    notes.textContent = itemParsed.notes
    notesDiv.appendChild(notes)
    toDoDiv.appendChild(notesDiv)
    let checklist = document.createElement("div")
    checklist.className = "checklist"
    checklist.textContent = "Checklist"
    let i = 0
    while (i < itemParsed.checklist.length){
        let checklist_item = document.createElement("div")
        checklist_item.className = "checklist-item"
        let checkmark = document.createElement("div")
        checkmark.className = "checkmark"
        checklist_item.textContent = itemParsed.checklist[i].title
        checklist_item.className = `item${i}`
        checklist.appendChild(checklist_item)
        checkmark.id = `${i}`
        checkmark.addEventListener("click", (e)=>update(e))
        if (itemParsed.checklist[i].completed === false) checkmark.textContent = ""
        else checkmark.textContent = "\u2713"
        checklist.appendChild(checkmark)
        i++
    }
    toDoDiv.appendChild(checklist)
    to_do_section.appendChild(toDoDiv)
    to_do_section.className = "to-do-section"
}

export default expandTodo
import { parse } from "date-fns"
import { startScreen } from "../domEvents"

const newListItem = ()=>{
    const input_checklist = document.querySelector(".input-checklist")
    const button = document.querySelector(".new-checklist-item")
    const item_input = document.createElement("input")
    item_input.placeholder = "New checklist-item"
    item_input.className = "item-input"
    input_checklist.appendChild(item_input)
    const addItem = document.createElement("button")
    addItem.textContent = "Add item"
    addItem.addEventListener("click", addListItem)
    input_checklist.appendChild(addItem)
    input_checklist.removeChild(button)

    return input_checklist
}

const addListItem = ()=>{
    const input_checklist_render = document.querySelector(".input-checklist-render-ul")
    const item_input = document.querySelector(".item-input")
    const newItem = document.createElement("li")
    if (item_input.value === "") return
    
    else {newItem.textContent = item_input.value
    input_checklist_render.appendChild(newItem)
    item_input.value = ""}
    
    return input_checklist_render
}

const addTodo = ()=>{
    const title = document.querySelector(".title-input")
    const due = document.querySelector(".due-input")
    const description = document.querySelector(".description-input")
    const important = document.querySelector(".urgency-input")
    const work = document.getElementById("input-work")
    const family = document.getElementById("input-family")
    const personal = document.getElementById("input-personal")
    const notes = document.querySelector(".notes-input")
    const checklist = document.querySelector(".input-checklist-render-ul")
    


    if ( title.value ==="" || due.value === "")alert("Please enter a title and a due-date")
    else{   
        let listItemsArr = []
        let storageTitle = title.value
        checklist.childNodes.forEach(childNodes=>listItemsArr.push(childNodes.textContent))
        listItemsArr.shift()
        let checkArr = []
        let dueDate = parse(due.value, "yyyy-MM-dd", new Date())
        let i = 0
        while (i < listItemsArr.length){
            checkArr.push({title:listItemsArr[i], completed: false})
            i++
        }    
        let todo = { title: title.value, due: dueDate, description: description.value, important: important.checked,
            work: work.checked, family: family.checked, personal: personal.checked, notes: notes.value, checklist: checkArr}
        localStorage.setItem(storageTitle, JSON.stringify(todo))
        startScreen()
    }
}



export {newListItem, 
        addTodo}
                
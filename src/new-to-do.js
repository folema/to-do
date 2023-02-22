import { startScreen } from "./domEvents"
import {newListItem, addTodo} from "./functions/new-to-do-func"

const newToDo = ()=>{
    const new_to_do_form = document.createElement("div")
    new_to_do_form.className = "new-to-do-form"
    // Due Date
    const input_due = document.createElement("div")
    input_due.textContent = "Due Date"
    input_due.className = "input-due"
    const due_input = document.createElement("input")
    due_input.type = "date"
    due_input.className = "due-input"
    input_due.appendChild(due_input)
    new_to_do_form.appendChild(input_due)
    // title
    const input_title = document.createElement("div")
    input_title.textContent = "To-Do title"
    const title_input = document.createElement("input")
    title_input.placeholder = "Title of to-do"
    title_input.className = "title-input"
    input_title.appendChild(title_input)
    new_to_do_form.appendChild(input_title)
    // description
    const input_description = document.createElement("div")
    input_description.textContent = "Description"
    input_description.className = "input-description"
    const description_input = document.createElement("input")
    description_input.className = "description-input"
    input_description.appendChild(description_input)
    new_to_do_form.appendChild(input_description)
    // Urgency
    const input_urgency = document.createElement("div")
    input_urgency.textContent = "Important"
    input_urgency.className = "input-urgency"
    const urgency_input = document.createElement("input")
    urgency_input.type = "checkbox"
    urgency_input.className = "urgency-input"
    input_urgency.appendChild(urgency_input)
    new_to_do_form.appendChild(input_urgency)
    // category
    const input_category = document.createElement("div")
    input_category.textContent = "Category"
    input_category.className = "input-category"
    const workDiv = document.createElement("div")
    workDiv.textContent = "Work"
    const input_work = document.createElement("input")
    input_work.type = "checkbox"
    input_work.id = "input-work"
    workDiv.appendChild(input_work)
    input_category.appendChild(workDiv)
    const familyDiv = document.createElement("div")
    familyDiv.textContent = "Family"
    const input_family = document.createElement("input")
    input_family.type = "checkbox"
    input_family.id = "input-family"
    familyDiv.appendChild(input_family)
    input_category.appendChild(familyDiv)
    const personalDiv = document.createElement("div")
    personalDiv.textContent = "Personal"
    const input_personal = document.createElement("input")
    input_personal.type = "checkbox"
    input_personal.id = "input-personal"
    personalDiv.appendChild(input_personal)
    input_category.appendChild(personalDiv)
    new_to_do_form.appendChild(input_category)
    // notes
    const input_notes = document.createElement("div")
    input_notes.textContent = "Notes"
    input_notes.className = "input-notes"
    const notes_input = document.createElement ("textarea")
    notes_input.className = "notes-input"
    input_notes.appendChild(notes_input)
    new_to_do_form.appendChild(input_notes)
    //checklist
    const input_checklist = document.createElement("div")
    input_checklist.textContent = "New checklist-item"
    input_checklist.className = "input-checklist"
    const new_checklist_item = document.createElement("button")
    new_checklist_item.textContent = "+"
    new_checklist_item.className = "new-checklist-item"
    new_checklist_item.addEventListener("click", newListItem)
    input_checklist.appendChild(new_checklist_item)
    new_to_do_form.appendChild(input_checklist)
    // input-checklist-render
    const input_checklist_render = document.createElement("div")
    input_checklist_render.className = "input-checklist-render"
    const input_checklist_render_ul = document.createElement("ul")
    input_checklist_render_ul.className = "input-checklist-render-ul"
    input_checklist_render_ul.textContent = "Checklist"
    input_checklist_render.appendChild(input_checklist_render_ul)
    new_to_do_form.appendChild(input_checklist_render)
    //submit
    const submit_form = document.createElement("div")
    submit_form.className = "submit-form"
    const form_submit = document.createElement("button")
    form_submit.textContent = "Add To-Do"
    form_submit.addEventListener("click", addTodo)
    submit_form.appendChild(form_submit)
    //cancel
    const cancel = document.createElement("button")
    cancel.textContent = "Cancel"
    cancel.addEventListener("click", startScreen)
    submit_form.appendChild(cancel)
    new_to_do_form.appendChild(submit_form)

    return new_to_do_form
}

export default newToDo
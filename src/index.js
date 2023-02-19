import appendNewToDo from "./domEvents"

const to_do_section = document.querySelector(".to-do-section")
const newToDoButton = document.querySelector(".new-to-do-button")
let test = {title: "test",
            array: ["1", "to", 3]}

newToDoButton.addEventListener("click", appendNewToDo)



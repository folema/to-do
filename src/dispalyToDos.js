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
        todoDiv.textContent = todos[i].title
        to_do_section.appendChild(todoDiv)
        i++
    }
    
        
}

export {displayToDos}
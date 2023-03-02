import expandTodo from "./expandTodo"
const update = (e)=>{
    const title = document.querySelector(".title")
    const itemNumber = e.target.id
    const items = document.getElementsByClassName(`item${itemNumber}`)
    const item =items[0]
    const todo_unparsed = localStorage.getItem(title.textContent)
    const todo = JSON.parse(todo_unparsed)
    let i = 0
    console.log(title.textContent)
    while ( i < todo.checklist.length){
        
        if (todo.checklist[i].title === item.textContent){
            switch (todo.checklist[i].completed){
                case true:
                    todo.checklist[i].completed = false
                    break
                case false:
                    todo.checklist[i].completed = true
                    break
            }
        }
        i++
    }
    localStorage.removeItem(title.textContent)
    localStorage.setItem(title.textContent, JSON.stringify(todo))
    expandTodo(title.textContent)

}

export default update
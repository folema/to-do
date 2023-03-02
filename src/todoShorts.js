import { compareAsc, format, formatISO, isAfter, isFuture, isPast, isToday, parse, parseISO } from "date-fns"
import expandTodo from "./functions/expandTodo"

const reminders = ()=>{
    const dueToday = document.querySelector(".today")
    while(dueToday.firstChild)dueToday.removeChild(dueToday.firstChild)
    const dueThisWeek = document.querySelector(".upcoming")
    while(dueThisWeek.firstChild)dueThisWeek.removeChild(dueThisWeek.firstChild)
    const dueExpired = document.querySelector(".expired")
    while(dueExpired.firstChild)dueExpired.removeChild(dueExpired.firstChild)
    const todayTitle= document.createElement("h3")
    todayTitle.textContent = "Today"
    dueToday.appendChild(todayTitle)
    const upcomingTitle = document.createElement("h3")
    upcomingTitle.textContent = "Upcoming"
    dueThisWeek.appendChild(upcomingTitle)
    const expiredTitle = document.createElement("h3")
    expiredTitle.textContent = "Past Due"
    dueExpired.appendChild(expiredTitle)
    const duePast = document.createElement("ul")
    const dueUpcoming = document.createElement("ul")
    const dueTodayList = document.createElement("ul")
    const allKeys = Object.keys(localStorage)
    const allTodos = []    
    allKeys.forEach(key=>allTodos.push(JSON.parse(localStorage.getItem(key))))
    let i = 0
    while (i < allTodos.length){
        const todoTitle = document.createElement("li")
        todoTitle.textContent = allTodos[i].title
        let dueDateToParse = parseISO(allTodos[i].due)
        if (isToday(dueDateToParse))dueTodayList.appendChild(todoTitle)
        else if (isFuture(dueDateToParse))dueUpcoming.appendChild(todoTitle)
        else duePast.appendChild(todoTitle)
        todoTitle.addEventListener("click", ()=>expandTodo(todoTitle.textContent))

        i++        
    }
    dueExpired.appendChild(duePast)
    dueToday.appendChild(dueTodayList)
    dueThisWeek.appendChild(dueUpcoming)
}

export default reminders
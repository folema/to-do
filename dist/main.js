/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dispalyToDos.js":
/*!*****************************!*\
  !*** ./src/dispalyToDos.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayToDos": () => (/* binding */ displayToDos)
/* harmony export */ });
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



/***/ }),

/***/ "./src/domEvents.js":
/*!**************************!*\
  !*** ./src/domEvents.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendNewToDo": () => (/* binding */ appendNewToDo),
/* harmony export */   "startScreen": () => (/* binding */ startScreen)
/* harmony export */ });
/* harmony import */ var _new_to_do__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-to-do */ "./src/new-to-do.js");
/* harmony import */ var _dispalyToDos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dispalyToDos */ "./src/dispalyToDos.js");


const appendNewToDo = ()=>{
    const button = document.querySelector(".new-to-do-button")
    const to_do_section = document.querySelector(".to-do-section")
    while (to_do_section.firstChild)to_do_section.removeChild(to_do_section.firstChild)
    to_do_section.appendChild((0,_new_to_do__WEBPACK_IMPORTED_MODULE_0__["default"])())
    button.removeEventListener("click", appendNewToDo)
}

const startScreen = ()=>{
    const to_do_section = document.querySelector(".to-do-section")
    const button = document.querySelector(".new-to-do-button")
    while (to_do_section.firstChild)to_do_section.removeChild(to_do_section.firstChild)
    button.addEventListener("click", appendNewToDo)
    ;(0,_dispalyToDos__WEBPACK_IMPORTED_MODULE_1__.displayToDos)()

}



/***/ }),

/***/ "./src/functions/new-to-do-func.js":
/*!*****************************************!*\
  !*** ./src/functions/new-to-do-func.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTodo": () => (/* binding */ addTodo),
/* harmony export */   "newListItem": () => (/* binding */ newListItem)
/* harmony export */ });
/* harmony import */ var _domEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domEvents */ "./src/domEvents.js");


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
        let storageTitle = Date.now()
        checklist.childNodes.forEach(childNodes=>listItemsArr.push(childNodes.textContent))
        listItemsArr.shift()    
        let todo = { title: title.value, due: due.value, description: description.value, important: important.checked,
            work: work.checked, family: family.checked, personal: personal.checked, notes: notes.value, checklist: listItemsArr}
        localStorage.setItem(storageTitle, JSON.stringify(todo))
        ;(0,_domEvents__WEBPACK_IMPORTED_MODULE_0__.startScreen)()
    }
}



                

/***/ }),

/***/ "./src/new-to-do.js":
/*!**************************!*\
  !*** ./src/new-to-do.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domEvents */ "./src/domEvents.js");
/* harmony import */ var _functions_new_to_do_func__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/new-to-do-func */ "./src/functions/new-to-do-func.js");



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
    new_checklist_item.addEventListener("click", _functions_new_to_do_func__WEBPACK_IMPORTED_MODULE_1__.newListItem)
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
    form_submit.addEventListener("click", _functions_new_to_do_func__WEBPACK_IMPORTED_MODULE_1__.addTodo)
    submit_form.appendChild(form_submit)
    //cancel
    const cancel = document.createElement("button")
    cancel.textContent = "Cancel"
    cancel.addEventListener("click", _domEvents__WEBPACK_IMPORTED_MODULE_0__.startScreen)
    submit_form.appendChild(cancel)
    new_to_do_form.appendChild(submit_form)

    return new_to_do_form
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newToDo);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _domEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domEvents */ "./src/domEvents.js");

(0,_domEvents__WEBPACK_IMPORTED_MODULE_0__.startScreen)()



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQmlDO0FBQ1k7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsc0RBQU87QUFDckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBWTs7QUFFaEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCMEM7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsUUFBUSx3REFBVztBQUNuQjtBQUNBOzs7QUFJZ0I7QUFDaEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RHlDO0FBQ3NCOztBQUUvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsa0VBQVc7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDhEQUFPO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLG1EQUFXO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7O1VDN0dmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOMEM7QUFDMUMsdURBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9kaXNwYWx5VG9Eb3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZG9tRXZlbnRzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2Z1bmN0aW9ucy9uZXctdG8tZG8tZnVuYy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9uZXctdG8tZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkaXNwbGF5VG9Eb3MgPSAoKT0+e1xuICAgIGNvbnN0IHRvX2RvX3NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvLWRvLXNlY3Rpb25cIilcbiAgICBjb25zdCB0ZXN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IGFsbEtleXMgPSBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpXG4gICAgbGV0IHRvZG9zID0gW11cbiAgICBsZXQgdG9kbyA9IGFsbEtleXMuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICBsZXQgaXRlbSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSlcbiAgICAgICAgdG9kb3MucHVzaChKU09OLnBhcnNlKGl0ZW0pKVxuICAgIH0pXG4gICAgbGV0IGkgPSAwXG4gICAgd2hpbGUgKGk8IHRvZG9zLmxlbmd0aCl7XG4gICAgICAgIGxldCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICB0b2RvRGl2LnRleHRDb250ZW50ID0gdG9kb3NbaV0udGl0bGVcbiAgICAgICAgdG9fZG9fc2VjdGlvbi5hcHBlbmRDaGlsZCh0b2RvRGl2KVxuICAgICAgICBpKytcbiAgICB9XG4gICAgXG4gICAgICAgIFxufVxuXG5leHBvcnQge2Rpc3BsYXlUb0Rvc30iLCJpbXBvcnQgbmV3VG9EbyBmcm9tIFwiLi9uZXctdG8tZG9cIlxuaW1wb3J0IHsgZGlzcGxheVRvRG9zIH0gZnJvbSBcIi4vZGlzcGFseVRvRG9zXCJcbmNvbnN0IGFwcGVuZE5ld1RvRG8gPSAoKT0+e1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXRvLWRvLWJ1dHRvblwiKVxuICAgIGNvbnN0IHRvX2RvX3NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvLWRvLXNlY3Rpb25cIilcbiAgICB3aGlsZSAodG9fZG9fc2VjdGlvbi5maXJzdENoaWxkKXRvX2RvX3NlY3Rpb24ucmVtb3ZlQ2hpbGQodG9fZG9fc2VjdGlvbi5maXJzdENoaWxkKVxuICAgIHRvX2RvX3NlY3Rpb24uYXBwZW5kQ2hpbGQobmV3VG9EbygpKVxuICAgIGJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXBwZW5kTmV3VG9Ebylcbn1cblxuY29uc3Qgc3RhcnRTY3JlZW4gPSAoKT0+e1xuICAgIGNvbnN0IHRvX2RvX3NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvLWRvLXNlY3Rpb25cIilcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy10by1kby1idXR0b25cIilcbiAgICB3aGlsZSAodG9fZG9fc2VjdGlvbi5maXJzdENoaWxkKXRvX2RvX3NlY3Rpb24ucmVtb3ZlQ2hpbGQodG9fZG9fc2VjdGlvbi5maXJzdENoaWxkKVxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXBwZW5kTmV3VG9EbylcbiAgICBkaXNwbGF5VG9Eb3MoKVxuXG59XG5cbmV4cG9ydCB7YXBwZW5kTmV3VG9EbywgXG4gICAgICAgIHN0YXJ0U2NyZWVufSIsImltcG9ydCB7IHN0YXJ0U2NyZWVuIH0gZnJvbSBcIi4uL2RvbUV2ZW50c1wiXG5cbmNvbnN0IG5ld0xpc3RJdGVtID0gKCk9PntcbiAgICBjb25zdCBpbnB1dF9jaGVja2xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LWNoZWNrbGlzdFwiKVxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LWNoZWNrbGlzdC1pdGVtXCIpXG4gICAgY29uc3QgaXRlbV9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIGl0ZW1faW5wdXQucGxhY2Vob2xkZXIgPSBcIk5ldyBjaGVja2xpc3QtaXRlbVwiXG4gICAgaXRlbV9pbnB1dC5jbGFzc05hbWUgPSBcIml0ZW0taW5wdXRcIlxuICAgIGlucHV0X2NoZWNrbGlzdC5hcHBlbmRDaGlsZChpdGVtX2lucHV0KVxuICAgIGNvbnN0IGFkZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgYWRkSXRlbS50ZXh0Q29udGVudCA9IFwiQWRkIGl0ZW1cIlxuICAgIGFkZEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZExpc3RJdGVtKVxuICAgIGlucHV0X2NoZWNrbGlzdC5hcHBlbmRDaGlsZChhZGRJdGVtKVxuICAgIGlucHV0X2NoZWNrbGlzdC5yZW1vdmVDaGlsZChidXR0b24pXG5cbiAgICByZXR1cm4gaW5wdXRfY2hlY2tsaXN0XG59XG5cbmNvbnN0IGFkZExpc3RJdGVtID0gKCk9PntcbiAgICBjb25zdCBpbnB1dF9jaGVja2xpc3RfcmVuZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dC1jaGVja2xpc3QtcmVuZGVyLXVsXCIpXG4gICAgY29uc3QgaXRlbV9pbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaXRlbS1pbnB1dFwiKVxuICAgIGNvbnN0IG5ld0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICBpZiAoaXRlbV9pbnB1dC52YWx1ZSA9PT0gXCJcIikgcmV0dXJuXG4gICAgXG4gICAgZWxzZSB7bmV3SXRlbS50ZXh0Q29udGVudCA9IGl0ZW1faW5wdXQudmFsdWVcbiAgICBpbnB1dF9jaGVja2xpc3RfcmVuZGVyLmFwcGVuZENoaWxkKG5ld0l0ZW0pXG4gICAgaXRlbV9pbnB1dC52YWx1ZSA9IFwiXCJ9XG4gICAgXG4gICAgcmV0dXJuIGlucHV0X2NoZWNrbGlzdF9yZW5kZXJcbn1cblxuY29uc3QgYWRkVG9kbyA9ICgpPT57XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlLWlucHV0XCIpXG4gICAgY29uc3QgZHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kdWUtaW5wdXRcIilcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb24taW5wdXRcIilcbiAgICBjb25zdCBpbXBvcnRhbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVyZ2VuY3ktaW5wdXRcIilcbiAgICBjb25zdCB3b3JrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC13b3JrXCIpXG4gICAgY29uc3QgZmFtaWx5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1mYW1pbHlcIilcbiAgICBjb25zdCBwZXJzb25hbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtcGVyc29uYWxcIilcbiAgICBjb25zdCBub3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm90ZXMtaW5wdXRcIilcbiAgICBjb25zdCBjaGVja2xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LWNoZWNrbGlzdC1yZW5kZXItdWxcIilcbiAgICBcblxuXG4gICAgaWYgKCB0aXRsZS52YWx1ZSA9PT1cIlwiIHx8IGR1ZS52YWx1ZSA9PT0gXCJcIilhbGVydChcIlBsZWFzZSBlbnRlciBhIHRpdGxlIGFuZCBhIGR1ZS1kYXRlXCIpXG4gICAgZWxzZXsgICBcbiAgICAgICAgbGV0IGxpc3RJdGVtc0FyciA9IFtdXG4gICAgICAgIGxldCBzdG9yYWdlVGl0bGUgPSBEYXRlLm5vdygpXG4gICAgICAgIGNoZWNrbGlzdC5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGROb2Rlcz0+bGlzdEl0ZW1zQXJyLnB1c2goY2hpbGROb2Rlcy50ZXh0Q29udGVudCkpXG4gICAgICAgIGxpc3RJdGVtc0Fyci5zaGlmdCgpICAgIFxuICAgICAgICBsZXQgdG9kbyA9IHsgdGl0bGU6IHRpdGxlLnZhbHVlLCBkdWU6IGR1ZS52YWx1ZSwgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLnZhbHVlLCBpbXBvcnRhbnQ6IGltcG9ydGFudC5jaGVja2VkLFxuICAgICAgICAgICAgd29yazogd29yay5jaGVja2VkLCBmYW1pbHk6IGZhbWlseS5jaGVja2VkLCBwZXJzb25hbDogcGVyc29uYWwuY2hlY2tlZCwgbm90ZXM6IG5vdGVzLnZhbHVlLCBjaGVja2xpc3Q6IGxpc3RJdGVtc0Fycn1cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RvcmFnZVRpdGxlLCBKU09OLnN0cmluZ2lmeSh0b2RvKSlcbiAgICAgICAgc3RhcnRTY3JlZW4oKVxuICAgIH1cbn1cblxuXG5leHBvcnQge25ld0xpc3RJdGVtLCBcbiAgICAgICAgYWRkVG9kb31cbiAgICAgICAgICAgICAgICAiLCJpbXBvcnQgeyBzdGFydFNjcmVlbiB9IGZyb20gXCIuL2RvbUV2ZW50c1wiXG5pbXBvcnQge25ld0xpc3RJdGVtLCBhZGRUb2RvfSBmcm9tIFwiLi9mdW5jdGlvbnMvbmV3LXRvLWRvLWZ1bmNcIlxuXG5jb25zdCBuZXdUb0RvID0gKCk9PntcbiAgICBjb25zdCBuZXdfdG9fZG9fZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBuZXdfdG9fZG9fZm9ybS5jbGFzc05hbWUgPSBcIm5ldy10by1kby1mb3JtXCJcbiAgICAvLyBEdWUgRGF0ZVxuICAgIGNvbnN0IGlucHV0X2R1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBpbnB1dF9kdWUudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlXCJcbiAgICBpbnB1dF9kdWUuY2xhc3NOYW1lID0gXCJpbnB1dC1kdWVcIlxuICAgIGNvbnN0IGR1ZV9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIGR1ZV9pbnB1dC50eXBlID0gXCJkYXRlXCJcbiAgICBkdWVfaW5wdXQuY2xhc3NOYW1lID0gXCJkdWUtaW5wdXRcIlxuICAgIGlucHV0X2R1ZS5hcHBlbmRDaGlsZChkdWVfaW5wdXQpXG4gICAgbmV3X3RvX2RvX2Zvcm0uYXBwZW5kQ2hpbGQoaW5wdXRfZHVlKVxuICAgIC8vIHRpdGxlXG4gICAgY29uc3QgaW5wdXRfdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgaW5wdXRfdGl0bGUudGV4dENvbnRlbnQgPSBcIlRvLURvIHRpdGxlXCJcbiAgICBjb25zdCB0aXRsZV9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIHRpdGxlX2lucHV0LnBsYWNlaG9sZGVyID0gXCJUaXRsZSBvZiB0by1kb1wiXG4gICAgdGl0bGVfaW5wdXQuY2xhc3NOYW1lID0gXCJ0aXRsZS1pbnB1dFwiXG4gICAgaW5wdXRfdGl0bGUuYXBwZW5kQ2hpbGQodGl0bGVfaW5wdXQpXG4gICAgbmV3X3RvX2RvX2Zvcm0uYXBwZW5kQ2hpbGQoaW5wdXRfdGl0bGUpXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBjb25zdCBpbnB1dF9kZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBpbnB1dF9kZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb25cIlxuICAgIGlucHV0X2Rlc2NyaXB0aW9uLmNsYXNzTmFtZSA9IFwiaW5wdXQtZGVzY3JpcHRpb25cIlxuICAgIGNvbnN0IGRlc2NyaXB0aW9uX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgZGVzY3JpcHRpb25faW5wdXQuY2xhc3NOYW1lID0gXCJkZXNjcmlwdGlvbi1pbnB1dFwiXG4gICAgaW5wdXRfZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25faW5wdXQpXG4gICAgbmV3X3RvX2RvX2Zvcm0uYXBwZW5kQ2hpbGQoaW5wdXRfZGVzY3JpcHRpb24pXG4gICAgLy8gVXJnZW5jeVxuICAgIGNvbnN0IGlucHV0X3VyZ2VuY3kgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgaW5wdXRfdXJnZW5jeS50ZXh0Q29udGVudCA9IFwiSW1wb3J0YW50XCJcbiAgICBpbnB1dF91cmdlbmN5LmNsYXNzTmFtZSA9IFwiaW5wdXQtdXJnZW5jeVwiXG4gICAgY29uc3QgdXJnZW5jeV9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIHVyZ2VuY3lfaW5wdXQudHlwZSA9IFwiY2hlY2tib3hcIlxuICAgIHVyZ2VuY3lfaW5wdXQuY2xhc3NOYW1lID0gXCJ1cmdlbmN5LWlucHV0XCJcbiAgICBpbnB1dF91cmdlbmN5LmFwcGVuZENoaWxkKHVyZ2VuY3lfaW5wdXQpXG4gICAgbmV3X3RvX2RvX2Zvcm0uYXBwZW5kQ2hpbGQoaW5wdXRfdXJnZW5jeSlcbiAgICAvLyBjYXRlZ29yeVxuICAgIGNvbnN0IGlucHV0X2NhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGlucHV0X2NhdGVnb3J5LnRleHRDb250ZW50ID0gXCJDYXRlZ29yeVwiXG4gICAgaW5wdXRfY2F0ZWdvcnkuY2xhc3NOYW1lID0gXCJpbnB1dC1jYXRlZ29yeVwiXG4gICAgY29uc3Qgd29ya0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICB3b3JrRGl2LnRleHRDb250ZW50ID0gXCJXb3JrXCJcbiAgICBjb25zdCBpbnB1dF93b3JrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgaW5wdXRfd29yay50eXBlID0gXCJjaGVja2JveFwiXG4gICAgaW5wdXRfd29yay5pZCA9IFwiaW5wdXQtd29ya1wiXG4gICAgd29ya0Rpdi5hcHBlbmRDaGlsZChpbnB1dF93b3JrKVxuICAgIGlucHV0X2NhdGVnb3J5LmFwcGVuZENoaWxkKHdvcmtEaXYpXG4gICAgY29uc3QgZmFtaWx5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGZhbWlseURpdi50ZXh0Q29udGVudCA9IFwiRmFtaWx5XCJcbiAgICBjb25zdCBpbnB1dF9mYW1pbHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBpbnB1dF9mYW1pbHkudHlwZSA9IFwiY2hlY2tib3hcIlxuICAgIGlucHV0X2ZhbWlseS5pZCA9IFwiaW5wdXQtZmFtaWx5XCJcbiAgICBmYW1pbHlEaXYuYXBwZW5kQ2hpbGQoaW5wdXRfZmFtaWx5KVxuICAgIGlucHV0X2NhdGVnb3J5LmFwcGVuZENoaWxkKGZhbWlseURpdilcbiAgICBjb25zdCBwZXJzb25hbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBwZXJzb25hbERpdi50ZXh0Q29udGVudCA9IFwiUGVyc29uYWxcIlxuICAgIGNvbnN0IGlucHV0X3BlcnNvbmFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgaW5wdXRfcGVyc29uYWwudHlwZSA9IFwiY2hlY2tib3hcIlxuICAgIGlucHV0X3BlcnNvbmFsLmlkID0gXCJpbnB1dC1wZXJzb25hbFwiXG4gICAgcGVyc29uYWxEaXYuYXBwZW5kQ2hpbGQoaW5wdXRfcGVyc29uYWwpXG4gICAgaW5wdXRfY2F0ZWdvcnkuYXBwZW5kQ2hpbGQocGVyc29uYWxEaXYpXG4gICAgbmV3X3RvX2RvX2Zvcm0uYXBwZW5kQ2hpbGQoaW5wdXRfY2F0ZWdvcnkpXG4gICAgLy8gbm90ZXNcbiAgICBjb25zdCBpbnB1dF9ub3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBpbnB1dF9ub3Rlcy50ZXh0Q29udGVudCA9IFwiTm90ZXNcIlxuICAgIGlucHV0X25vdGVzLmNsYXNzTmFtZSA9IFwiaW5wdXQtbm90ZXNcIlxuICAgIGNvbnN0IG5vdGVzX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAoXCJ0ZXh0YXJlYVwiKVxuICAgIG5vdGVzX2lucHV0LmNsYXNzTmFtZSA9IFwibm90ZXMtaW5wdXRcIlxuICAgIGlucHV0X25vdGVzLmFwcGVuZENoaWxkKG5vdGVzX2lucHV0KVxuICAgIG5ld190b19kb19mb3JtLmFwcGVuZENoaWxkKGlucHV0X25vdGVzKVxuICAgIC8vY2hlY2tsaXN0XG4gICAgY29uc3QgaW5wdXRfY2hlY2tsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGlucHV0X2NoZWNrbGlzdC50ZXh0Q29udGVudCA9IFwiTmV3IGNoZWNrbGlzdC1pdGVtXCJcbiAgICBpbnB1dF9jaGVja2xpc3QuY2xhc3NOYW1lID0gXCJpbnB1dC1jaGVja2xpc3RcIlxuICAgIGNvbnN0IG5ld19jaGVja2xpc3RfaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBuZXdfY2hlY2tsaXN0X2l0ZW0udGV4dENvbnRlbnQgPSBcIitcIlxuICAgIG5ld19jaGVja2xpc3RfaXRlbS5jbGFzc05hbWUgPSBcIm5ldy1jaGVja2xpc3QtaXRlbVwiXG4gICAgbmV3X2NoZWNrbGlzdF9pdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXdMaXN0SXRlbSlcbiAgICBpbnB1dF9jaGVja2xpc3QuYXBwZW5kQ2hpbGQobmV3X2NoZWNrbGlzdF9pdGVtKVxuICAgIG5ld190b19kb19mb3JtLmFwcGVuZENoaWxkKGlucHV0X2NoZWNrbGlzdClcbiAgICAvLyBpbnB1dC1jaGVja2xpc3QtcmVuZGVyXG4gICAgY29uc3QgaW5wdXRfY2hlY2tsaXN0X3JlbmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBpbnB1dF9jaGVja2xpc3RfcmVuZGVyLmNsYXNzTmFtZSA9IFwiaW5wdXQtY2hlY2tsaXN0LXJlbmRlclwiXG4gICAgY29uc3QgaW5wdXRfY2hlY2tsaXN0X3JlbmRlcl91bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKVxuICAgIGlucHV0X2NoZWNrbGlzdF9yZW5kZXJfdWwuY2xhc3NOYW1lID0gXCJpbnB1dC1jaGVja2xpc3QtcmVuZGVyLXVsXCJcbiAgICBpbnB1dF9jaGVja2xpc3RfcmVuZGVyX3VsLnRleHRDb250ZW50ID0gXCJDaGVja2xpc3RcIlxuICAgIGlucHV0X2NoZWNrbGlzdF9yZW5kZXIuYXBwZW5kQ2hpbGQoaW5wdXRfY2hlY2tsaXN0X3JlbmRlcl91bClcbiAgICBuZXdfdG9fZG9fZm9ybS5hcHBlbmRDaGlsZChpbnB1dF9jaGVja2xpc3RfcmVuZGVyKVxuICAgIC8vc3VibWl0XG4gICAgY29uc3Qgc3VibWl0X2Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgc3VibWl0X2Zvcm0uY2xhc3NOYW1lID0gXCJzdWJtaXQtZm9ybVwiXG4gICAgY29uc3QgZm9ybV9zdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgZm9ybV9zdWJtaXQudGV4dENvbnRlbnQgPSBcIkFkZCBUby1Eb1wiXG4gICAgZm9ybV9zdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFRvZG8pXG4gICAgc3VibWl0X2Zvcm0uYXBwZW5kQ2hpbGQoZm9ybV9zdWJtaXQpXG4gICAgLy9jYW5jZWxcbiAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgY2FuY2VsLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIlxuICAgIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RhcnRTY3JlZW4pXG4gICAgc3VibWl0X2Zvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsKVxuICAgIG5ld190b19kb19mb3JtLmFwcGVuZENoaWxkKHN1Ym1pdF9mb3JtKVxuXG4gICAgcmV0dXJuIG5ld190b19kb19mb3JtXG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ld1RvRG8iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHN0YXJ0U2NyZWVuIH0gZnJvbSBcIi4vZG9tRXZlbnRzXCI7XG5zdGFydFNjcmVlbigpXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
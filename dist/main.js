/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domEvents.js":
/*!**************************!*\
  !*** ./src/domEvents.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _new_to_do__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-to-do */ "./src/new-to-do.js");

const appendNewToDo = ()=>{
    const button = document.querySelector(".new-to-do-button")
    const to_do_section = document.querySelector(".to-do-section")
    to_do_section.appendChild((0,_new_to_do__WEBPACK_IMPORTED_MODULE_0__["default"])())
    button.removeEventListener("click", appendNewToDo)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appendNewToDo);

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
            let todo = { title: title.value, due: due.value, description: description.value, important: important.checked,
            work: work.checked, family: family.checked, personal: personal.checked, notes: notes.value, checklist: checklist}
            let storageId = Date.now().toString()
            let test = []
            checklist.childNodes.forEach(childNodes=>test.push(childNodes.textContent))
            console.log(test)
            //localStorage.setItem(storageId, JSON.stringify(todo))
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
/* harmony import */ var _functions_new_to_do_func__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/new-to-do-func */ "./src/functions/new-to-do-func.js");


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
    new_checklist_item.addEventListener("click", _functions_new_to_do_func__WEBPACK_IMPORTED_MODULE_0__.newListItem)
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
    form_submit.addEventListener("click", _functions_new_to_do_func__WEBPACK_IMPORTED_MODULE_0__.addTodo)
    submit_form.appendChild(form_submit)
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


const to_do_section = document.querySelector(".to-do-section")
const newToDoButton = document.querySelector(".new-to-do-button")
let test = {title: "test",
            array: ["1", "to", 3]}

newToDoButton.addEventListener("click", _domEvents__WEBPACK_IMPORTED_MODULE_0__["default"])



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHNEQUFPO0FBQ3JDO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQ1JmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBSWdCO0FBQ2hCOzs7Ozs7Ozs7Ozs7Ozs7QUN6RCtEOztBQUUvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsa0VBQVc7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDhEQUFPO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7O1VDdkdmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOdUM7O0FBRXZDO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUEsd0NBQXdDLGtEQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZG9tRXZlbnRzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2Z1bmN0aW9ucy9uZXctdG8tZG8tZnVuYy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9uZXctdG8tZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbmV3VG9EbyBmcm9tIFwiLi9uZXctdG8tZG9cIlxuY29uc3QgYXBwZW5kTmV3VG9EbyA9ICgpPT57XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctdG8tZG8tYnV0dG9uXCIpXG4gICAgY29uc3QgdG9fZG9fc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG8tZG8tc2VjdGlvblwiKVxuICAgIHRvX2RvX3NlY3Rpb24uYXBwZW5kQ2hpbGQobmV3VG9EbygpKVxuICAgIGJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXBwZW5kTmV3VG9Ebylcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXBwZW5kTmV3VG9EbyIsImNvbnN0IG5ld0xpc3RJdGVtID0gKCk9PntcbiAgICBjb25zdCBpbnB1dF9jaGVja2xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LWNoZWNrbGlzdFwiKVxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LWNoZWNrbGlzdC1pdGVtXCIpXG4gICAgY29uc3QgaXRlbV9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIGl0ZW1faW5wdXQucGxhY2Vob2xkZXIgPSBcIk5ldyBjaGVja2xpc3QtaXRlbVwiXG4gICAgaXRlbV9pbnB1dC5jbGFzc05hbWUgPSBcIml0ZW0taW5wdXRcIlxuICAgIGlucHV0X2NoZWNrbGlzdC5hcHBlbmRDaGlsZChpdGVtX2lucHV0KVxuICAgIGNvbnN0IGFkZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgYWRkSXRlbS50ZXh0Q29udGVudCA9IFwiQWRkIGl0ZW1cIlxuICAgIGFkZEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZExpc3RJdGVtKVxuICAgIGlucHV0X2NoZWNrbGlzdC5hcHBlbmRDaGlsZChhZGRJdGVtKVxuICAgIGlucHV0X2NoZWNrbGlzdC5yZW1vdmVDaGlsZChidXR0b24pXG5cbiAgICByZXR1cm4gaW5wdXRfY2hlY2tsaXN0XG59XG5cbmNvbnN0IGFkZExpc3RJdGVtID0gKCk9PntcbiAgICBjb25zdCBpbnB1dF9jaGVja2xpc3RfcmVuZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dC1jaGVja2xpc3QtcmVuZGVyLXVsXCIpXG4gICAgY29uc3QgaXRlbV9pbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaXRlbS1pbnB1dFwiKVxuICAgIGNvbnN0IG5ld0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICBpZiAoaXRlbV9pbnB1dC52YWx1ZSA9PT0gXCJcIikgcmV0dXJuXG4gICAgXG4gICAgZWxzZSB7bmV3SXRlbS50ZXh0Q29udGVudCA9IGl0ZW1faW5wdXQudmFsdWVcbiAgICBpbnB1dF9jaGVja2xpc3RfcmVuZGVyLmFwcGVuZENoaWxkKG5ld0l0ZW0pXG4gICAgaXRlbV9pbnB1dC52YWx1ZSA9IFwiXCJ9XG4gICAgXG4gICAgcmV0dXJuIGlucHV0X2NoZWNrbGlzdF9yZW5kZXJcbn1cblxuY29uc3QgYWRkVG9kbyA9ICgpPT57XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlLWlucHV0XCIpXG4gICAgY29uc3QgZHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kdWUtaW5wdXRcIilcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb24taW5wdXRcIilcbiAgICBjb25zdCBpbXBvcnRhbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVyZ2VuY3ktaW5wdXRcIilcbiAgICBjb25zdCB3b3JrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC13b3JrXCIpXG4gICAgY29uc3QgZmFtaWx5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1mYW1pbHlcIilcbiAgICBjb25zdCBwZXJzb25hbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtcGVyc29uYWxcIilcbiAgICBjb25zdCBub3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm90ZXMtaW5wdXRcIilcbiAgICBjb25zdCBjaGVja2xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LWNoZWNrbGlzdC1yZW5kZXItdWxcIilcbiAgICBcblxuXG4gICAgaWYgKCB0aXRsZS52YWx1ZSA9PT1cIlwiIHx8IGR1ZS52YWx1ZSA9PT0gXCJcIilhbGVydChcIlBsZWFzZSBlbnRlciBhIHRpdGxlIGFuZCBhIGR1ZS1kYXRlXCIpXG4gICAgZWxzZXsgICBcbiAgICAgICAgICAgIGxldCB0b2RvID0geyB0aXRsZTogdGl0bGUudmFsdWUsIGR1ZTogZHVlLnZhbHVlLCBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24udmFsdWUsIGltcG9ydGFudDogaW1wb3J0YW50LmNoZWNrZWQsXG4gICAgICAgICAgICB3b3JrOiB3b3JrLmNoZWNrZWQsIGZhbWlseTogZmFtaWx5LmNoZWNrZWQsIHBlcnNvbmFsOiBwZXJzb25hbC5jaGVja2VkLCBub3Rlczogbm90ZXMudmFsdWUsIGNoZWNrbGlzdDogY2hlY2tsaXN0fVxuICAgICAgICAgICAgbGV0IHN0b3JhZ2VJZCA9IERhdGUubm93KCkudG9TdHJpbmcoKVxuICAgICAgICAgICAgbGV0IHRlc3QgPSBbXVxuICAgICAgICAgICAgY2hlY2tsaXN0LmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZE5vZGVzPT50ZXN0LnB1c2goY2hpbGROb2Rlcy50ZXh0Q29udGVudCkpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0ZXN0KVxuICAgICAgICAgICAgLy9sb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdG9yYWdlSWQsIEpTT04uc3RyaW5naWZ5KHRvZG8pKVxuICAgIH1cbn1cblxuXG5leHBvcnQge25ld0xpc3RJdGVtLCBcbiAgICAgICAgYWRkVG9kb31cbiAgICAgICAgICAgICAgICAiLCJpbXBvcnQge25ld0xpc3RJdGVtLCBhZGRUb2RvfSBmcm9tIFwiLi9mdW5jdGlvbnMvbmV3LXRvLWRvLWZ1bmNcIlxuXG5jb25zdCBuZXdUb0RvID0gKCk9PntcbiAgICBjb25zdCBuZXdfdG9fZG9fZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBuZXdfdG9fZG9fZm9ybS5jbGFzc05hbWUgPSBcIm5ldy10by1kby1mb3JtXCJcbiAgICAvLyBEdWUgRGF0ZVxuICAgIGNvbnN0IGlucHV0X2R1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBpbnB1dF9kdWUudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlXCJcbiAgICBpbnB1dF9kdWUuY2xhc3NOYW1lID0gXCJpbnB1dC1kdWVcIlxuICAgIGNvbnN0IGR1ZV9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIGR1ZV9pbnB1dC50eXBlID0gXCJkYXRlXCJcbiAgICBkdWVfaW5wdXQuY2xhc3NOYW1lID0gXCJkdWUtaW5wdXRcIlxuICAgIGlucHV0X2R1ZS5hcHBlbmRDaGlsZChkdWVfaW5wdXQpXG4gICAgbmV3X3RvX2RvX2Zvcm0uYXBwZW5kQ2hpbGQoaW5wdXRfZHVlKVxuICAgIC8vIHRpdGxlXG4gICAgY29uc3QgaW5wdXRfdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgaW5wdXRfdGl0bGUudGV4dENvbnRlbnQgPSBcIlRvLURvIHRpdGxlXCJcbiAgICBjb25zdCB0aXRsZV9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIHRpdGxlX2lucHV0LnBsYWNlaG9sZGVyID0gXCJUaXRsZSBvZiB0by1kb1wiXG4gICAgdGl0bGVfaW5wdXQuY2xhc3NOYW1lID0gXCJ0aXRsZS1pbnB1dFwiXG4gICAgaW5wdXRfdGl0bGUuYXBwZW5kQ2hpbGQodGl0bGVfaW5wdXQpXG4gICAgbmV3X3RvX2RvX2Zvcm0uYXBwZW5kQ2hpbGQoaW5wdXRfdGl0bGUpXG4gICAgLy8gZGVzY3JpcHRpb25cbiAgICBjb25zdCBpbnB1dF9kZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBpbnB1dF9kZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb25cIlxuICAgIGlucHV0X2Rlc2NyaXB0aW9uLmNsYXNzTmFtZSA9IFwiaW5wdXQtZGVzY3JpcHRpb25cIlxuICAgIGNvbnN0IGRlc2NyaXB0aW9uX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgZGVzY3JpcHRpb25faW5wdXQuY2xhc3NOYW1lID0gXCJkZXNjcmlwdGlvbi1pbnB1dFwiXG4gICAgaW5wdXRfZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25faW5wdXQpXG4gICAgbmV3X3RvX2RvX2Zvcm0uYXBwZW5kQ2hpbGQoaW5wdXRfZGVzY3JpcHRpb24pXG4gICAgLy8gVXJnZW5jeVxuICAgIGNvbnN0IGlucHV0X3VyZ2VuY3kgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgaW5wdXRfdXJnZW5jeS50ZXh0Q29udGVudCA9IFwiSW1wb3J0YW50XCJcbiAgICBpbnB1dF91cmdlbmN5LmNsYXNzTmFtZSA9IFwiaW5wdXQtdXJnZW5jeVwiXG4gICAgY29uc3QgdXJnZW5jeV9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIHVyZ2VuY3lfaW5wdXQudHlwZSA9IFwiY2hlY2tib3hcIlxuICAgIHVyZ2VuY3lfaW5wdXQuY2xhc3NOYW1lID0gXCJ1cmdlbmN5LWlucHV0XCJcbiAgICBpbnB1dF91cmdlbmN5LmFwcGVuZENoaWxkKHVyZ2VuY3lfaW5wdXQpXG4gICAgbmV3X3RvX2RvX2Zvcm0uYXBwZW5kQ2hpbGQoaW5wdXRfdXJnZW5jeSlcbiAgICAvLyBjYXRlZ29yeVxuICAgIGNvbnN0IGlucHV0X2NhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGlucHV0X2NhdGVnb3J5LnRleHRDb250ZW50ID0gXCJDYXRlZ29yeVwiXG4gICAgaW5wdXRfY2F0ZWdvcnkuY2xhc3NOYW1lID0gXCJpbnB1dC1jYXRlZ29yeVwiXG4gICAgY29uc3Qgd29ya0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICB3b3JrRGl2LnRleHRDb250ZW50ID0gXCJXb3JrXCJcbiAgICBjb25zdCBpbnB1dF93b3JrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgaW5wdXRfd29yay50eXBlID0gXCJjaGVja2JveFwiXG4gICAgaW5wdXRfd29yay5pZCA9IFwiaW5wdXQtd29ya1wiXG4gICAgd29ya0Rpdi5hcHBlbmRDaGlsZChpbnB1dF93b3JrKVxuICAgIGlucHV0X2NhdGVnb3J5LmFwcGVuZENoaWxkKHdvcmtEaXYpXG4gICAgY29uc3QgZmFtaWx5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGZhbWlseURpdi50ZXh0Q29udGVudCA9IFwiRmFtaWx5XCJcbiAgICBjb25zdCBpbnB1dF9mYW1pbHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBpbnB1dF9mYW1pbHkudHlwZSA9IFwiY2hlY2tib3hcIlxuICAgIGlucHV0X2ZhbWlseS5pZCA9IFwiaW5wdXQtZmFtaWx5XCJcbiAgICBmYW1pbHlEaXYuYXBwZW5kQ2hpbGQoaW5wdXRfZmFtaWx5KVxuICAgIGlucHV0X2NhdGVnb3J5LmFwcGVuZENoaWxkKGZhbWlseURpdilcbiAgICBjb25zdCBwZXJzb25hbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBwZXJzb25hbERpdi50ZXh0Q29udGVudCA9IFwiUGVyc29uYWxcIlxuICAgIGNvbnN0IGlucHV0X3BlcnNvbmFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgaW5wdXRfcGVyc29uYWwudHlwZSA9IFwiY2hlY2tib3hcIlxuICAgIGlucHV0X3BlcnNvbmFsLmlkID0gXCJpbnB1dC1wZXJzb25hbFwiXG4gICAgcGVyc29uYWxEaXYuYXBwZW5kQ2hpbGQoaW5wdXRfcGVyc29uYWwpXG4gICAgaW5wdXRfY2F0ZWdvcnkuYXBwZW5kQ2hpbGQocGVyc29uYWxEaXYpXG4gICAgbmV3X3RvX2RvX2Zvcm0uYXBwZW5kQ2hpbGQoaW5wdXRfY2F0ZWdvcnkpXG4gICAgLy8gbm90ZXNcbiAgICBjb25zdCBpbnB1dF9ub3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBpbnB1dF9ub3Rlcy50ZXh0Q29udGVudCA9IFwiTm90ZXNcIlxuICAgIGlucHV0X25vdGVzLmNsYXNzTmFtZSA9IFwiaW5wdXQtbm90ZXNcIlxuICAgIGNvbnN0IG5vdGVzX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAoXCJ0ZXh0YXJlYVwiKVxuICAgIG5vdGVzX2lucHV0LmNsYXNzTmFtZSA9IFwibm90ZXMtaW5wdXRcIlxuICAgIGlucHV0X25vdGVzLmFwcGVuZENoaWxkKG5vdGVzX2lucHV0KVxuICAgIG5ld190b19kb19mb3JtLmFwcGVuZENoaWxkKGlucHV0X25vdGVzKVxuICAgIC8vY2hlY2tsaXN0XG4gICAgY29uc3QgaW5wdXRfY2hlY2tsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGlucHV0X2NoZWNrbGlzdC50ZXh0Q29udGVudCA9IFwiTmV3IGNoZWNrbGlzdC1pdGVtXCJcbiAgICBpbnB1dF9jaGVja2xpc3QuY2xhc3NOYW1lID0gXCJpbnB1dC1jaGVja2xpc3RcIlxuICAgIGNvbnN0IG5ld19jaGVja2xpc3RfaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBuZXdfY2hlY2tsaXN0X2l0ZW0udGV4dENvbnRlbnQgPSBcIitcIlxuICAgIG5ld19jaGVja2xpc3RfaXRlbS5jbGFzc05hbWUgPSBcIm5ldy1jaGVja2xpc3QtaXRlbVwiXG4gICAgbmV3X2NoZWNrbGlzdF9pdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXdMaXN0SXRlbSlcbiAgICBpbnB1dF9jaGVja2xpc3QuYXBwZW5kQ2hpbGQobmV3X2NoZWNrbGlzdF9pdGVtKVxuICAgIG5ld190b19kb19mb3JtLmFwcGVuZENoaWxkKGlucHV0X2NoZWNrbGlzdClcbiAgICAvLyBpbnB1dC1jaGVja2xpc3QtcmVuZGVyXG4gICAgY29uc3QgaW5wdXRfY2hlY2tsaXN0X3JlbmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBpbnB1dF9jaGVja2xpc3RfcmVuZGVyLmNsYXNzTmFtZSA9IFwiaW5wdXQtY2hlY2tsaXN0LXJlbmRlclwiXG4gICAgY29uc3QgaW5wdXRfY2hlY2tsaXN0X3JlbmRlcl91bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKVxuICAgIGlucHV0X2NoZWNrbGlzdF9yZW5kZXJfdWwuY2xhc3NOYW1lID0gXCJpbnB1dC1jaGVja2xpc3QtcmVuZGVyLXVsXCJcbiAgICBpbnB1dF9jaGVja2xpc3RfcmVuZGVyX3VsLnRleHRDb250ZW50ID0gXCJDaGVja2xpc3RcIlxuICAgIGlucHV0X2NoZWNrbGlzdF9yZW5kZXIuYXBwZW5kQ2hpbGQoaW5wdXRfY2hlY2tsaXN0X3JlbmRlcl91bClcbiAgICBuZXdfdG9fZG9fZm9ybS5hcHBlbmRDaGlsZChpbnB1dF9jaGVja2xpc3RfcmVuZGVyKVxuICAgIC8vc3VibWl0XG4gICAgY29uc3Qgc3VibWl0X2Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgc3VibWl0X2Zvcm0uY2xhc3NOYW1lID0gXCJzdWJtaXQtZm9ybVwiXG4gICAgY29uc3QgZm9ybV9zdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgZm9ybV9zdWJtaXQudGV4dENvbnRlbnQgPSBcIkFkZCBUby1Eb1wiXG4gICAgZm9ybV9zdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFRvZG8pXG4gICAgc3VibWl0X2Zvcm0uYXBwZW5kQ2hpbGQoZm9ybV9zdWJtaXQpXG4gICAgbmV3X3RvX2RvX2Zvcm0uYXBwZW5kQ2hpbGQoc3VibWl0X2Zvcm0pXG5cbiAgICByZXR1cm4gbmV3X3RvX2RvX2Zvcm1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3VG9EbyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGFwcGVuZE5ld1RvRG8gZnJvbSBcIi4vZG9tRXZlbnRzXCJcblxuY29uc3QgdG9fZG9fc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG8tZG8tc2VjdGlvblwiKVxuY29uc3QgbmV3VG9Eb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXRvLWRvLWJ1dHRvblwiKVxubGV0IHRlc3QgPSB7dGl0bGU6IFwidGVzdFwiLFxuICAgICAgICAgICAgYXJyYXk6IFtcIjFcIiwgXCJ0b1wiLCAzXX1cblxubmV3VG9Eb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXBwZW5kTmV3VG9EbylcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
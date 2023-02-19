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
        let listItemsArr = []
        checklist.childNodes.forEach(childNodes=>listItemsArr.push(childNodes.textContent))
        listItemsArr.shift()    
        let todo = { title: title.value, due: due.value, description: description.value, important: important.checked,
            work: work.checked, family: family.checked, personal: personal.checked, notes: notes.value, checklist: listItemsArr}
        localStorage.setItem("ToDo", JSON.stringify(todo))
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


const newToDoButton = document.querySelector(".new-to-do-button")
newToDoButton.addEventListener("click", _domEvents__WEBPACK_IMPORTED_MODULE_0__["default"])



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHNEQUFPO0FBQ3JDO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQ1JmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7OztBQUlnQjtBQUNoQjs7Ozs7Ozs7Ozs7Ozs7O0FDeEQrRDs7QUFFL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELGtFQUFXO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyw4REFBTztBQUNqRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7OztVQ3ZHZjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnVDOztBQUV2QztBQUNBLHdDQUF3QyxrREFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLy4vc3JjL2RvbUV2ZW50cy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9mdW5jdGlvbnMvbmV3LXRvLWRvLWZ1bmMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvbmV3LXRvLWRvLmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5ld1RvRG8gZnJvbSBcIi4vbmV3LXRvLWRvXCJcbmNvbnN0IGFwcGVuZE5ld1RvRG8gPSAoKT0+e1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXRvLWRvLWJ1dHRvblwiKVxuICAgIGNvbnN0IHRvX2RvX3NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvLWRvLXNlY3Rpb25cIilcbiAgICB0b19kb19zZWN0aW9uLmFwcGVuZENoaWxkKG5ld1RvRG8oKSlcbiAgICBidXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFwcGVuZE5ld1RvRG8pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFwcGVuZE5ld1RvRG8iLCJjb25zdCBuZXdMaXN0SXRlbSA9ICgpPT57XG4gICAgY29uc3QgaW5wdXRfY2hlY2tsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dC1jaGVja2xpc3RcIilcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy1jaGVja2xpc3QtaXRlbVwiKVxuICAgIGNvbnN0IGl0ZW1faW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBpdGVtX2lucHV0LnBsYWNlaG9sZGVyID0gXCJOZXcgY2hlY2tsaXN0LWl0ZW1cIlxuICAgIGl0ZW1faW5wdXQuY2xhc3NOYW1lID0gXCJpdGVtLWlucHV0XCJcbiAgICBpbnB1dF9jaGVja2xpc3QuYXBwZW5kQ2hpbGQoaXRlbV9pbnB1dClcbiAgICBjb25zdCBhZGRJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIGFkZEl0ZW0udGV4dENvbnRlbnQgPSBcIkFkZCBpdGVtXCJcbiAgICBhZGRJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRMaXN0SXRlbSlcbiAgICBpbnB1dF9jaGVja2xpc3QuYXBwZW5kQ2hpbGQoYWRkSXRlbSlcbiAgICBpbnB1dF9jaGVja2xpc3QucmVtb3ZlQ2hpbGQoYnV0dG9uKVxuXG4gICAgcmV0dXJuIGlucHV0X2NoZWNrbGlzdFxufVxuXG5jb25zdCBhZGRMaXN0SXRlbSA9ICgpPT57XG4gICAgY29uc3QgaW5wdXRfY2hlY2tsaXN0X3JlbmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtY2hlY2tsaXN0LXJlbmRlci11bFwiKVxuICAgIGNvbnN0IGl0ZW1faW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLml0ZW0taW5wdXRcIilcbiAgICBjb25zdCBuZXdJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgaWYgKGl0ZW1faW5wdXQudmFsdWUgPT09IFwiXCIpIHJldHVyblxuICAgIFxuICAgIGVsc2Uge25ld0l0ZW0udGV4dENvbnRlbnQgPSBpdGVtX2lucHV0LnZhbHVlXG4gICAgaW5wdXRfY2hlY2tsaXN0X3JlbmRlci5hcHBlbmRDaGlsZChuZXdJdGVtKVxuICAgIGl0ZW1faW5wdXQudmFsdWUgPSBcIlwifVxuICAgIFxuICAgIHJldHVybiBpbnB1dF9jaGVja2xpc3RfcmVuZGVyXG59XG5cbmNvbnN0IGFkZFRvZG8gPSAoKT0+e1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZS1pbnB1dFwiKVxuICAgIGNvbnN0IGR1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHVlLWlucHV0XCIpXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uLWlucHV0XCIpXG4gICAgY29uc3QgaW1wb3J0YW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51cmdlbmN5LWlucHV0XCIpXG4gICAgY29uc3Qgd29yayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtd29ya1wiKVxuICAgIGNvbnN0IGZhbWlseSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZmFtaWx5XCIpXG4gICAgY29uc3QgcGVyc29uYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXBlcnNvbmFsXCIpXG4gICAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGVzLWlucHV0XCIpXG4gICAgY29uc3QgY2hlY2tsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dC1jaGVja2xpc3QtcmVuZGVyLXVsXCIpXG4gICAgXG5cblxuICAgIGlmICggdGl0bGUudmFsdWUgPT09XCJcIiB8fCBkdWUudmFsdWUgPT09IFwiXCIpYWxlcnQoXCJQbGVhc2UgZW50ZXIgYSB0aXRsZSBhbmQgYSBkdWUtZGF0ZVwiKVxuICAgIGVsc2V7ICAgXG4gICAgICAgIGxldCBsaXN0SXRlbXNBcnIgPSBbXVxuICAgICAgICBjaGVja2xpc3QuY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkTm9kZXM9Pmxpc3RJdGVtc0Fyci5wdXNoKGNoaWxkTm9kZXMudGV4dENvbnRlbnQpKVxuICAgICAgICBsaXN0SXRlbXNBcnIuc2hpZnQoKSAgICBcbiAgICAgICAgbGV0IHRvZG8gPSB7IHRpdGxlOiB0aXRsZS52YWx1ZSwgZHVlOiBkdWUudmFsdWUsIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbi52YWx1ZSwgaW1wb3J0YW50OiBpbXBvcnRhbnQuY2hlY2tlZCxcbiAgICAgICAgICAgIHdvcms6IHdvcmsuY2hlY2tlZCwgZmFtaWx5OiBmYW1pbHkuY2hlY2tlZCwgcGVyc29uYWw6IHBlcnNvbmFsLmNoZWNrZWQsIG5vdGVzOiBub3Rlcy52YWx1ZSwgY2hlY2tsaXN0OiBsaXN0SXRlbXNBcnJ9XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiVG9Eb1wiLCBKU09OLnN0cmluZ2lmeSh0b2RvKSlcbiAgICB9XG59XG5cblxuZXhwb3J0IHtuZXdMaXN0SXRlbSwgXG4gICAgICAgIGFkZFRvZG99XG4gICAgICAgICAgICAgICAgIiwiaW1wb3J0IHtuZXdMaXN0SXRlbSwgYWRkVG9kb30gZnJvbSBcIi4vZnVuY3Rpb25zL25ldy10by1kby1mdW5jXCJcblxuY29uc3QgbmV3VG9EbyA9ICgpPT57XG4gICAgY29uc3QgbmV3X3RvX2RvX2Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgbmV3X3RvX2RvX2Zvcm0uY2xhc3NOYW1lID0gXCJuZXctdG8tZG8tZm9ybVwiXG4gICAgLy8gRHVlIERhdGVcbiAgICBjb25zdCBpbnB1dF9kdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgaW5wdXRfZHVlLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZVwiXG4gICAgaW5wdXRfZHVlLmNsYXNzTmFtZSA9IFwiaW5wdXQtZHVlXCJcbiAgICBjb25zdCBkdWVfaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBkdWVfaW5wdXQudHlwZSA9IFwiZGF0ZVwiXG4gICAgZHVlX2lucHV0LmNsYXNzTmFtZSA9IFwiZHVlLWlucHV0XCJcbiAgICBpbnB1dF9kdWUuYXBwZW5kQ2hpbGQoZHVlX2lucHV0KVxuICAgIG5ld190b19kb19mb3JtLmFwcGVuZENoaWxkKGlucHV0X2R1ZSlcbiAgICAvLyB0aXRsZVxuICAgIGNvbnN0IGlucHV0X3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGlucHV0X3RpdGxlLnRleHRDb250ZW50ID0gXCJUby1EbyB0aXRsZVwiXG4gICAgY29uc3QgdGl0bGVfaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICB0aXRsZV9pbnB1dC5wbGFjZWhvbGRlciA9IFwiVGl0bGUgb2YgdG8tZG9cIlxuICAgIHRpdGxlX2lucHV0LmNsYXNzTmFtZSA9IFwidGl0bGUtaW5wdXRcIlxuICAgIGlucHV0X3RpdGxlLmFwcGVuZENoaWxkKHRpdGxlX2lucHV0KVxuICAgIG5ld190b19kb19mb3JtLmFwcGVuZENoaWxkKGlucHV0X3RpdGxlKVxuICAgIC8vIGRlc2NyaXB0aW9uXG4gICAgY29uc3QgaW5wdXRfZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgaW5wdXRfZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uXCJcbiAgICBpbnB1dF9kZXNjcmlwdGlvbi5jbGFzc05hbWUgPSBcImlucHV0LWRlc2NyaXB0aW9uXCJcbiAgICBjb25zdCBkZXNjcmlwdGlvbl9pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIGRlc2NyaXB0aW9uX2lucHV0LmNsYXNzTmFtZSA9IFwiZGVzY3JpcHRpb24taW5wdXRcIlxuICAgIGlucHV0X2Rlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uX2lucHV0KVxuICAgIG5ld190b19kb19mb3JtLmFwcGVuZENoaWxkKGlucHV0X2Rlc2NyaXB0aW9uKVxuICAgIC8vIFVyZ2VuY3lcbiAgICBjb25zdCBpbnB1dF91cmdlbmN5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGlucHV0X3VyZ2VuY3kudGV4dENvbnRlbnQgPSBcIkltcG9ydGFudFwiXG4gICAgaW5wdXRfdXJnZW5jeS5jbGFzc05hbWUgPSBcImlucHV0LXVyZ2VuY3lcIlxuICAgIGNvbnN0IHVyZ2VuY3lfaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICB1cmdlbmN5X2lucHV0LnR5cGUgPSBcImNoZWNrYm94XCJcbiAgICB1cmdlbmN5X2lucHV0LmNsYXNzTmFtZSA9IFwidXJnZW5jeS1pbnB1dFwiXG4gICAgaW5wdXRfdXJnZW5jeS5hcHBlbmRDaGlsZCh1cmdlbmN5X2lucHV0KVxuICAgIG5ld190b19kb19mb3JtLmFwcGVuZENoaWxkKGlucHV0X3VyZ2VuY3kpXG4gICAgLy8gY2F0ZWdvcnlcbiAgICBjb25zdCBpbnB1dF9jYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBpbnB1dF9jYXRlZ29yeS50ZXh0Q29udGVudCA9IFwiQ2F0ZWdvcnlcIlxuICAgIGlucHV0X2NhdGVnb3J5LmNsYXNzTmFtZSA9IFwiaW5wdXQtY2F0ZWdvcnlcIlxuICAgIGNvbnN0IHdvcmtEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgd29ya0Rpdi50ZXh0Q29udGVudCA9IFwiV29ya1wiXG4gICAgY29uc3QgaW5wdXRfd29yayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIGlucHV0X3dvcmsudHlwZSA9IFwiY2hlY2tib3hcIlxuICAgIGlucHV0X3dvcmsuaWQgPSBcImlucHV0LXdvcmtcIlxuICAgIHdvcmtEaXYuYXBwZW5kQ2hpbGQoaW5wdXRfd29yaylcbiAgICBpbnB1dF9jYXRlZ29yeS5hcHBlbmRDaGlsZCh3b3JrRGl2KVxuICAgIGNvbnN0IGZhbWlseURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBmYW1pbHlEaXYudGV4dENvbnRlbnQgPSBcIkZhbWlseVwiXG4gICAgY29uc3QgaW5wdXRfZmFtaWx5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgaW5wdXRfZmFtaWx5LnR5cGUgPSBcImNoZWNrYm94XCJcbiAgICBpbnB1dF9mYW1pbHkuaWQgPSBcImlucHV0LWZhbWlseVwiXG4gICAgZmFtaWx5RGl2LmFwcGVuZENoaWxkKGlucHV0X2ZhbWlseSlcbiAgICBpbnB1dF9jYXRlZ29yeS5hcHBlbmRDaGlsZChmYW1pbHlEaXYpXG4gICAgY29uc3QgcGVyc29uYWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgcGVyc29uYWxEaXYudGV4dENvbnRlbnQgPSBcIlBlcnNvbmFsXCJcbiAgICBjb25zdCBpbnB1dF9wZXJzb25hbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIGlucHV0X3BlcnNvbmFsLnR5cGUgPSBcImNoZWNrYm94XCJcbiAgICBpbnB1dF9wZXJzb25hbC5pZCA9IFwiaW5wdXQtcGVyc29uYWxcIlxuICAgIHBlcnNvbmFsRGl2LmFwcGVuZENoaWxkKGlucHV0X3BlcnNvbmFsKVxuICAgIGlucHV0X2NhdGVnb3J5LmFwcGVuZENoaWxkKHBlcnNvbmFsRGl2KVxuICAgIG5ld190b19kb19mb3JtLmFwcGVuZENoaWxkKGlucHV0X2NhdGVnb3J5KVxuICAgIC8vIG5vdGVzXG4gICAgY29uc3QgaW5wdXRfbm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgaW5wdXRfbm90ZXMudGV4dENvbnRlbnQgPSBcIk5vdGVzXCJcbiAgICBpbnB1dF9ub3Rlcy5jbGFzc05hbWUgPSBcImlucHV0LW5vdGVzXCJcbiAgICBjb25zdCBub3Rlc19pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgKFwidGV4dGFyZWFcIilcbiAgICBub3Rlc19pbnB1dC5jbGFzc05hbWUgPSBcIm5vdGVzLWlucHV0XCJcbiAgICBpbnB1dF9ub3Rlcy5hcHBlbmRDaGlsZChub3Rlc19pbnB1dClcbiAgICBuZXdfdG9fZG9fZm9ybS5hcHBlbmRDaGlsZChpbnB1dF9ub3RlcylcbiAgICAvL2NoZWNrbGlzdFxuICAgIGNvbnN0IGlucHV0X2NoZWNrbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBpbnB1dF9jaGVja2xpc3QudGV4dENvbnRlbnQgPSBcIk5ldyBjaGVja2xpc3QtaXRlbVwiXG4gICAgaW5wdXRfY2hlY2tsaXN0LmNsYXNzTmFtZSA9IFwiaW5wdXQtY2hlY2tsaXN0XCJcbiAgICBjb25zdCBuZXdfY2hlY2tsaXN0X2l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgbmV3X2NoZWNrbGlzdF9pdGVtLnRleHRDb250ZW50ID0gXCIrXCJcbiAgICBuZXdfY2hlY2tsaXN0X2l0ZW0uY2xhc3NOYW1lID0gXCJuZXctY2hlY2tsaXN0LWl0ZW1cIlxuICAgIG5ld19jaGVja2xpc3RfaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV3TGlzdEl0ZW0pXG4gICAgaW5wdXRfY2hlY2tsaXN0LmFwcGVuZENoaWxkKG5ld19jaGVja2xpc3RfaXRlbSlcbiAgICBuZXdfdG9fZG9fZm9ybS5hcHBlbmRDaGlsZChpbnB1dF9jaGVja2xpc3QpXG4gICAgLy8gaW5wdXQtY2hlY2tsaXN0LXJlbmRlclxuICAgIGNvbnN0IGlucHV0X2NoZWNrbGlzdF9yZW5kZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgaW5wdXRfY2hlY2tsaXN0X3JlbmRlci5jbGFzc05hbWUgPSBcImlucHV0LWNoZWNrbGlzdC1yZW5kZXJcIlxuICAgIGNvbnN0IGlucHV0X2NoZWNrbGlzdF9yZW5kZXJfdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIilcbiAgICBpbnB1dF9jaGVja2xpc3RfcmVuZGVyX3VsLmNsYXNzTmFtZSA9IFwiaW5wdXQtY2hlY2tsaXN0LXJlbmRlci11bFwiXG4gICAgaW5wdXRfY2hlY2tsaXN0X3JlbmRlcl91bC50ZXh0Q29udGVudCA9IFwiQ2hlY2tsaXN0XCJcbiAgICBpbnB1dF9jaGVja2xpc3RfcmVuZGVyLmFwcGVuZENoaWxkKGlucHV0X2NoZWNrbGlzdF9yZW5kZXJfdWwpXG4gICAgbmV3X3RvX2RvX2Zvcm0uYXBwZW5kQ2hpbGQoaW5wdXRfY2hlY2tsaXN0X3JlbmRlcilcbiAgICAvL3N1Ym1pdFxuICAgIGNvbnN0IHN1Ym1pdF9mb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHN1Ym1pdF9mb3JtLmNsYXNzTmFtZSA9IFwic3VibWl0LWZvcm1cIlxuICAgIGNvbnN0IGZvcm1fc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIGZvcm1fc3VibWl0LnRleHRDb250ZW50ID0gXCJBZGQgVG8tRG9cIlxuICAgIGZvcm1fc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUb2RvKVxuICAgIHN1Ym1pdF9mb3JtLmFwcGVuZENoaWxkKGZvcm1fc3VibWl0KVxuICAgIG5ld190b19kb19mb3JtLmFwcGVuZENoaWxkKHN1Ym1pdF9mb3JtKVxuXG4gICAgcmV0dXJuIG5ld190b19kb19mb3JtXG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ld1RvRG8iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBhcHBlbmROZXdUb0RvIGZyb20gXCIuL2RvbUV2ZW50c1wiXG5cbmNvbnN0IG5ld1RvRG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy10by1kby1idXR0b25cIilcbm5ld1RvRG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFwcGVuZE5ld1RvRG8pXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n\nvar form = document.querySelector(\".js--form\");\nvar input = document.querySelector(\".js--form__input\");\nvar todoWrapper = document.querySelector(\".js--todos-wrapper\");\nvar todos = JSON.parse(localStorage.getItem(\"todos\")) || [];\ntodos.forEach(function (task) {\n  var todoElement = createTodoElement(task);\n  todoWrapper.appendChild(todoElement);\n});\nfunction saveToLocalStorage() {\n  localStorage.setItem(\"todos\", JSON.stringify(todos));\n}\nfunction createTodoElement(task) {\n  var li = document.createElement(\"li\");\n  li.className = \"todo-item\";\n  li.dataset.id = task.id;\n  if (task.done) {\n    li.classList.add(\"todo-item--checked\");\n  }\n  var checkbox = document.createElement(\"input\");\n  checkbox.type = \"checkbox\";\n  checkbox.checked = task.done;\n  var span = document.createElement(\"span\");\n  span.className = \"todo-item__description\";\n  span.textContent = task.text;\n  var button = document.createElement(\"button\");\n  button.className = \"todo-item__delete\";\n  button.textContent = \"Видалити\";\n  li.appendChild(checkbox);\n  li.appendChild(span);\n  li.appendChild(button);\n  checkbox.addEventListener(\"change\", function () {\n    li.classList.toggle(\"todo-item--checked\");\n    var index = todos.findIndex(function (t) {\n      return t.id === task.id;\n    });\n    if (index !== -1) {\n      todos[index].done = checkbox.checked;\n      saveToLocalStorage();\n    }\n  });\n  button.addEventListener(\"click\", function () {\n    var index = todos.findIndex(function (t) {\n      return t.id === task.id;\n    });\n    if (index !== -1) {\n      todos.splice(index, 1);\n      saveToLocalStorage();\n      li.remove();\n    }\n  });\n  return li;\n}\nform.addEventListener(\"submit\", function (event) {\n  event.preventDefault();\n  var newTaskText = input.value.trim();\n  if (newTaskText === \"\") return;\n  var newTodo = {\n    id: Date.now(),\n    text: newTaskText,\n    done: false\n  };\n  todos.push(newTodo);\n  saveToLocalStorage();\n  var todoItem = createTodoElement(newTodo);\n  todoWrapper.appendChild(todoItem);\n  input.value = \"\";\n});\n\n//# sourceURL=webpack://hw-15/./src/script.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://hw-15/./src/style.scss?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;
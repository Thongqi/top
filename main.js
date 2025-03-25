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

/***/ "./src/addtask.js":
/*!************************!*\
  !*** ./src/addtask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task),\n/* harmony export */   addNewTask: () => (/* binding */ addNewTask)\n/* harmony export */ });\nconst DAYINSECONDS = 86400000;\nlet Tasks = [];\n\nfunction Task(title, description, dueDate, priority, projectname){\n\n    this.title = title;\n    this.description = description ;\n    this.dueDate = dueDate ;\n    this.priority = priority;\n    this.project = projectname;\n    this.id = crypto.randomUUID();\n\n};\n\nfunction addNewTask(){\n\n    let button = document.querySelector('#add-new-task');\n    button.addEventListener('click', function(){\n        let title = document.querySelector('#new-task-form #title');\n        let description = document.querySelector('#new-task-form #description') || null;\n        let dueDate = document.querySelector('#new-task-form #duedate') || new Date(+new Date() + DAYINSECONDS);\n        let priority = setPriority();\n        let project = document.querySelector('#new-task-form #project') || null;\n        \n        var newtask = Task(title, description, dueDate, priority, project);\n        Tasks.push(newtask);\n    });\n\n};\n\nfunction setPriority(){\n    let urgency = document.querySelector('#new-task-form #urgency');\n    let importance = document.querySelector('#new-task-form #importance');\n\n    let priority;\n\n    if (urgency.value == 'urgent'){\n        if(importance.value == 'important'){\n            priority = '1';\n        }\n        else{\n            priority = '2';\n        };\n    }\n    else{\n        if(importance.value == 'important'){\n            priority = '3';\n        }\n        else{\n            priority = '4';\n        };\n    };\n\n    return priority;\n};\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/addtask.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _addtask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addtask.js */ \"./src/addtask.js\");\n\r\n\r\n(0,_addtask_js__WEBPACK_IMPORTED_MODULE_0__.addNewTask)();\n\n//# sourceURL=webpack:///./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
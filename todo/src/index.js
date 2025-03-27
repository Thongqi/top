import { addNewTask, displayNewTaskForm } from "./addtask.js"
import { displayTask } from "./displaytasks.js"
import { checkIfLocalStoragePresent } from "./localstorage.js"
import { displaytaskmodal } from "./displaytaskmodal.js";

import "./style.css";
import { addProject } from "./addproject.js";
export let Tasks = checkIfLocalStoragePresent();

// set min pickdate must be today or after
document.querySelector('#new-task-form #duedate').min = new Date().toISOString().split("T")[0];

displayTask(Tasks);
addNewTask();
displaytaskmodal();
// addProject();
// displayNewTaskForm();

window.addEventListener('click', function(e){
    console.log(e.target.id)
    displayNewTaskForm(e);
    addProject(e);
})

import { addNewTask, displayNewTaskForm } from "./addtask.js"
import { displayTask } from "./displaytasks.js"
import { checkIfTasksLocalStoragePresent, checkIfProjectsLocalStoragePresent } from "./localstorage.js"
import { displaytaskmodal } from "./displaytaskmodal.js";
import { changeStatus } from "./changetaskstatus.js";
import "./style.css";
import { displayElement } from "./addproject.js";
import { changePage } from "./changepage.js";
import { displayProjects } from "./displayprojects.js";
import { displayCountforSidebar } from "./displaytaskcount.js";
export let Tasks = checkIfTasksLocalStoragePresent();
export let Projects = checkIfProjectsLocalStoragePresent();

// set min pickdate must be today or after
document.querySelector('#new-task-form #duedate').min = new Date().toISOString().split("T")[0];


displayTask(Tasks);
displayProjects(Projects);
addNewTask();
displayCountforSidebar();

// addProject();
// displayNewTaskForm();

window.addEventListener('click', function(e){
    displayNewTaskForm(e);
    displayElement(e);
    displaytaskmodal(e);
    changeStatus(e, Tasks);
    changePage(e, Tasks);
})

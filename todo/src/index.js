import { addNewTask } from "./addtask.js"
import { displayTask } from "./displaytasks.js"
import { checkIfLocalStoragePresent } from "./localstorage.js"
import { displaytaskmodal } from "./displaytaskmodal.js";

import "./style.css";
export let Tasks = checkIfLocalStoragePresent();


displayTask(Tasks);
addNewTask();
displaytaskmodal();

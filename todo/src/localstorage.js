import { Tasks } from "./addtask.js"

Tasks.onchange = populateStorage(Tasks);

function populateStorage(Tasks){
    localstorage.setItem("tasks", Tasks);
}
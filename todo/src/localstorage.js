import { displayTask } from "./displaytasks";

export function populateTasksStorage(Tasks){
    localStorage.setItem("tasks", JSON.stringify(Tasks));
}

export function populateProjectsStorage(Projects){
    localStorage.setItem("projects", JSON.stringify(Projects));
}

export function checkIfTasksLocalStoragePresent(){
    return retrieveTasksLocalStorage() || [];
}

export function checkIfProjectsLocalStoragePresent(){
    return retrieveProjectsLocalStorage() || [];
}

function retrieveTasksLocalStorage(){
    return JSON.parse(localStorage.getItem("tasks"));
}

function retrieveProjectsLocalStorage(){
    return JSON.parse(localStorage.getItem("projects"));
}

export function updateTasksLocalStorage(newitem){
    let storage = retrieveTasksLocalStorage();

    const index = storage.findIndex(task => task.id == newitem.id);

    storage[index] = newitem;
    console.log(storage);
    populateTasksStorage(storage);
    displayTask(storage);
}
import { displayTask } from "./displaytasks";
const DAYINSECONDS = 86400000;

let initialvalue = [
    {
        "title": "buy facewash",
        "description": null,
        "dueDate": new Date(),
        "priority": "3",
        "project": null,
        "id": "b9ada3bb-b85c-465a-9fc7-83abc39bd985",
        "done": false
    },
    {
        "title": "don't forget your holly wand",
        "description": null,
        "dueDate": new Date(),
        "priority": "1",
        "project": null,
        "id": "50a324d3-3d1d-4705-ab8a-2d5bf817c10f",
        "done": false
    },
    {
        "title": "How to become a witch",
        "description": null,
        "dueDate": new Date(),
        "priority": "1",
        "project": "Book",
        "id": "1e9b505c-3965-4170-9f5a-f68fa518c637",
        "done": false
    },
    {
        "title": "Witch potion recipe",
        "description": null,
        "dueDate": new Date(+new Date() + DAYINSECONDS),
        "priority": "3",
        "project": "Book",
        "id": "fc72d8b2-b15f-413e-94d1-9fbadd3eef8c",
        "done": false
    },
    {
        "title": "make broomstick",
        "description": null,
        "dueDate": new Date(+new Date() + DAYINSECONDS),
        "priority": "4",
        "project": null,
        "id": "900278d0-4999-4b4e-91ac-56efe71cc663",
        "done": true
    }
]

if(!checkIfTasksLocalStoragePresent()){
    populateTasksStorage(initialvalue);
}

if (!checkIfProjectsLocalStoragePresent()){
    populateProjectsStorage([
        "Book"
    ])
}

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

export function editTask(newitem){
    const index = storage.findIndex(task => task.id == newitem.id);

    storage[index] = newitem;
    let storage = retrieveTasksLocalStorage();
    updateTasksLocalStorage(storage);
}

export function updateTasksLocalStorage(Tasks){
    console.log(Tasks);
    populateTasksStorage(Tasks);
    displayTask(Tasks);
}
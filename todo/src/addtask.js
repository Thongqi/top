import { displayTask } from "./displaytasks";
import { checkIfProjectsLocalStoragePresent, populateTasksStorage } from "./localstorage.js"
import { format } from "date-fns"
import { Tasks } from "./index.js";
import { addProject } from "./addproject.js";

export const DAYINSECONDS = 86400000;



export function Task(title, description, dueDate, priority, projectname){

    this.title = title;
    this.description = description ;
    this.dueDate = new Date(dueDate).toISOString(); //store in ISOstring to offset timezone
    this.priority = priority;
    this.project = projectname;
    this.id = crypto.randomUUID();
    this.done = false;

};

export function displayNewTaskForm(e){
    var form = document.querySelector('#new-task-form');

    // window.addEventListener('click', function(e){

        
        if (e.target.id == 'add-task' || e.target.parentElement.parentElement == form ){
            form.style.display = 'block';
        }
        else{
            form.style.display = 'none';
        }
    
    // })
  
}

export function addNewTask(){

    let button = document.querySelector('#add-new-task');
    button.addEventListener('click', function(){
        let title = document.querySelector('#new-task-form #title').value;
        let description = document.querySelector('#new-task-form #description').value || null;
        let dueDate = document.querySelector('#new-task-form #duedate').value || new Date(+new Date() + DAYINSECONDS);
        let priority = setPriority();
        let project = document.querySelector('#new-task-form #project').value || null;
        
        var newtask = new Task(title, description, dueDate, priority, project);
        Tasks.push(newtask);
        if (project && checkIfProjectsLocalStoragePresent().indexOf(project) < 0){
            addProject(project);
        }
        console.log(Tasks);

        displayTask(Tasks);
        populateTasksStorage(Tasks);
    });
};

function setPriority(){
    let urgency = document.querySelector('#new-task-form #urgency');
    let importance = document.querySelector('#new-task-form #importance');

    let priority;

    if (urgency.value == 'urgent'){
        if(importance.value == 'important'){
            priority = '1';
        }
        else{
            priority = '2';
        };
    }
    else{
        if(importance.value == 'important'){
            priority = '3';
        }
        else{
            priority = '4';
        };
    };

    return priority;
};






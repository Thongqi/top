import { displayTask } from "./displaytasks";
import { populateStorage } from "./localstorage.js"
import { format } from "date-fns"
import { Tasks } from "./index.js";

const DAYINSECONDS = 86400000;


export function Task(title, description, dueDate, priority, projectname){

    this.title = title;
    this.description = description ;
    this.dueDate = format(dueDate, 'dd/MM/yyyy');
    this.priority = priority;
    this.project = projectname;
    this.id = crypto.randomUUID();

};

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
        console.log(Tasks);

        displayTask(Tasks);
        populateStorage(Tasks)
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






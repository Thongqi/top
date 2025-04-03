import { edittask } from "./edittask.js";
import { Tasks } from "./index.js";
import { parseISO } from "date-fns";

let removeTimezone = (date) => {
    date = new Date(date);
    return new Date(
      date.valueOf() + date.getTimezoneOffset() * 60 * 1000
    );
 };

export function displaytaskmodal(e){
    let taskdetails;
    const modal = document.querySelector('.task-modal');

    if (e.target.classList.contains('task')){
        taskdetails = getTaskDetails(e.target.id);
        modal.id = `modal-${e.target.id}`
        
        modal.style.display = 'block';
    
        modal.querySelector('#task-title').value = taskdetails.title;
        modal.querySelector('#task-description').value = taskdetails.description;
        modal.querySelector('#task-duedate').valueAsDate = parseISO(taskdetails.dueDate);
        modal.querySelector('#task-project').value = taskdetails.project;
    }
    else if (e.target.parentElement.parentElement.classList.contains('task-modal')){
        
    }
    else if (e.target.id == 'edit-task'){
        const taskId = modal.id.slice(6);
        edittask(taskId, Tasks);
    }
    else{
        modal.style.display = 'none';
    }
    
}

function getTaskDetails(taskId){
    const taskdetails = Tasks.filter(task => task.id == taskId);
    console.log(taskdetails[0])
    return taskdetails[0];
}
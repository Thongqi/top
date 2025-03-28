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

    // check selected item is a task
    const check = Tasks.filter(task => task.id == e.target.id);

    if(check.length == '1'){
        taskdetails = getTaskDetails(e.target.id);

        const modal = document.querySelector('.task-modal');
        modal.style.display = 'block';
    
        modal.querySelector('#task-title').value = taskdetails.title;
        modal.querySelector('#task-description').value = taskdetails.description;
        modal.querySelector('#task-duedate').valueAsDate = parseISO(taskdetails.dueDate);
    }
}


function getTaskDetails(taskId){
    const taskdetails = Tasks.filter(task => task.id == taskId);
    console.log(taskdetails[0])
    return taskdetails[0];
}
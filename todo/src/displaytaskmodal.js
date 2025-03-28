import { Tasks } from "./index.js";
import { parseISO } from "date-fns";

let removeTimezone = (date) => {
    date = new Date(date);
    return new Date(
      date.valueOf() + date.getTimezoneOffset() * 60 * 1000
    );
 };

export function displaytaskmodal(e){
    let taskdetails, check;

    const modal = document.querySelector('.task-modal');
    // check selected item is a task
    if (e){
        check = Tasks.filter(task => task.id == e.target.id);
        if(check.length == '1'){
            taskdetails = getTaskDetails(e.target.id);
    

            modal.style.display = 'block';
        
            modal.querySelector('#task-title').value = taskdetails.title;
            modal.querySelector('#task-description').value = taskdetails.description;
            modal.querySelector('#task-duedate').valueAsDate = parseISO(taskdetails.dueDate);
        }
        else{
            modal.style.display = 'none';
        }
    }

    
}


function getTaskDetails(taskId){
    const taskdetails = Tasks.filter(task => task.id == taskId);
    console.log(taskdetails[0])
    return taskdetails[0];
}
import { Tasks } from "./index.js";

export function displaytaskmodal(){
    let taskdetails;

    const tasks = Array.from(document.querySelectorAll('.content .task'));

    tasks.forEach(task => {
        task.addEventListener('click', function(e){
            taskdetails = getTaskDetails(e.target.id);

            const modal = document.querySelector('.task-modal');
            modal.style.display = 'block';

            modal.querySelector('#task-title').value = taskdetails.title;
            modal.querySelector('#task-description').value = taskdetails.description;
            modal.querySelector('#task-duedate').value = taskdetails.dueDate;


        })
    })

   
}

function getTaskDetails(taskId){
    const taskdetails = Tasks.filter(task => task.id == taskId);

    return taskdetails[0];
}
import { editTask } from "./localstorage";
import { parseISO } from "date-fns";

export function edittask(taskId, Tasks){
    const taskmodal = document.querySelector('.task-modal');

    console.log(taskId, Tasks);
    const index = Tasks.findIndex(task => task.id == taskId);
    Tasks[index].title = taskmodal.querySelector('#task-title').value;
    Tasks[index].description = taskmodal.querySelector('#task-description').value;
    Tasks[index].dueDate = parseISO(taskmodal.querySelector('#task-duedate').value);

    editTask(Tasks[index]);
 
   
}
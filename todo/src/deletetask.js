import { updateTasksLocalStorage } from "./localstorage";

export function deleteTask(taskId, Tasks){
    Tasks = Tasks.filter(task => task.id != taskId);
    updateTasksLocalStorage(Tasks);
}
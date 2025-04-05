import { checkIfLocalStoragePresent, updateTasksLocalStorage } from "./localstorage";

export function changeStatus(e, Tasks){
    if(e.target.classList.contains('check-status')){
        const parentId = e.target.parentElement.id;

        const task = Tasks.filter(task => task.id == parentId);
        task[0].done = !task[0].done;
        console.log(task[0]);
        
        changeDoneTaskCss(e.target.parentElement, task[0].done);
        updateTasksLocalStorage(task[0]);
    }
}

export function changeDoneTaskCss(taskelement, status){
    if (status){
        taskelement.classList.add('done');
        taskelement.querySelector('input').checked = true;
    }
    else{
        taskelement.classList.remove('done');
        taskelement.querySelector('input').checked = false;
    }
  
}
import { Tasks } from "./addtask.js"

export function displayTask(tasks){
    for (const task of tasks){
        const container = document.createElement('div');
        const title = document.createElement('p');
        title.innerHTML = task.title;

        const dueDate = document.createElement('p');
        dueDate.innerHTML = task.dueDate;

        container.append(title, dueDate);
        var prioritygrid = checkpriority(task);

        prioritygrid.append(container);
    }
}

function checkpriority(task){
    if(task.priority == '1'){
        return document.querySelector('.priority-1')
    }
    else if(task.priority == '2'){
        return document.querySelector('.priority-2')
    }
    else if(task.priority == '3'){
        return document.querySelector('.priority-3')
    }
    else{
        return document.querySelector('.priority-4')
    }
}
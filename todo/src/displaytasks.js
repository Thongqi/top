// import { Tasks } from "./addtask.js"

import { format, parseISO } from "date-fns";
import { changeDoneTaskCss } from "./changetaskstatus";
import { Tasks } from ".";
import { populateStorage } from "./localstorage";

export function displayTask(tasks){
    clearTasksDom();

    for (const task of tasks){
        const container = document.createElement('div');
        container.id = task.id;
        container.classList.add('task');

        const title = document.createElement('h4');
        title.innerHTML = task.title;

        const dueDate = document.createElement('p');
        dueDate.innerHTML = format(task.dueDate, 'dd/MM/yyyy');

        const projectname = document.createElement('mark');
        projectname.innerHTML = `#${task.project}`;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('check-status');

        container.append(title, dueDate, projectname, checkbox);
        var prioritygrid = checkpriority(task);

  
        changeDoneTaskCss(container, task.done);
  

        prioritygrid.append(container);
    }
}

function clearTasksDom(){
    const grids = Array.from(document.querySelectorAll('.content div div'));

    grids.forEach(grid => {
        grid.innerHTML = '';
    });
    
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


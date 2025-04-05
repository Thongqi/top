import { compareAsc, isTomorrow } from "date-fns";
import { displayTask } from "./displaytasks";

export function changePage(e, tasks){
    const title = document.querySelector('.content h2');

    if (e.target.id == 'today-tasks'){
        const todaytask = getTodayTasks(tasks);
        displayTask(todaytask);
        title.innerHTML = "Today's Tasks";
        setFocus(e.target);
        
    }
    else if (e.target.id == 'all-tasks'){
        displayTask(tasks);
        title.innerHTML = 'All Tasks';
        setFocus(e.target);
    }
    else if( e.target.id == 'tmr-tasks'){
        const tmrtask = getTmrTasks(tasks);
        displayTask(tmrtask);
        title.innerHTML = "Tomorrow's Tasks";
        setFocus(e.target);
    }
    else if (e.target.parentElement.classList.contains('projects') && e.target.id != 'add-new-project'){
        const projecttasks = tasks.filter(task => task.project == e.target.id);
        displayTask(projecttasks);
        title.innerHTML = e.target.id;
        setFocus(e.target);
    }
}

export function getTodayTasks(tasks){
    const todaydate = new Date();
    return tasks.filter(task => compareAsc(task.dueDate, todaydate) < 1);
}

export function getTmrTasks(tasks){
    return tasks.filter(task => isTomorrow(task.dueDate));
}

function setFocus(element){
    document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('focus'))
    element.classList.add('focus');
}
import { compareAsc } from "date-fns";
import { displayTask } from "./displaytasks";

export function changePage(e, tasks){
    const title = document.querySelector('.content h2');

    if (e.target.id == 'today-tasks'){
        const todaydate = new Date();
        const todaytask = tasks.filter(task => compareAsc(task.dueDate, todaydate) < 1)
        displayTask(todaytask);
        title.innerHTML = "Today's Tasks";
        document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('focus'))
        e.target.classList.add('focus');
        
    }
    else if (e.target.id == 'all-tasks'){
        displayTask(tasks);
        title.innerHTML = 'All Tasks';
        document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('focus'))
        e.target.classList.add('focus');
    }
    else if (e.target.parentElement.classList.contains('projects') && e.target.id != 'add-new-project'){
        const projecttasks = tasks.filter(task => task.project == e.target.id);
        displayTask(projecttasks);
        title.innerHTML = e.target.id;
        document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('focus'))
        e.target.classList.add('focus');
    }
    
}
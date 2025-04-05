import { Tasks } from ".";
import { getTmrTasks, getTodayTasks } from "./changepage";


function displayCount(numberoftasks, element){
    const span = element.querySelector('span');
    span.innerHTML = `(${numberoftasks})`;
}

export function displayCountforSidebar(){
    const tasksCountArray = [Tasks, getTodayTasks(Tasks), getTmrTasks(Tasks)].map(item => item.length);
    const lists = document.querySelectorAll('.sidebar .tasks li');
    console.log(lists);
    for(let i = 0; i < tasksCountArray.length; i++){
        displayCount(tasksCountArray[i], lists[i + 1]);
    }
}
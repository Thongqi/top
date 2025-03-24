const DAYINSECONDS = 86400000;
let Tasks = [];

export function Task(title, description, dueDate, priority, projectname){

    this.title = title;
    this.description = description || null;
    this.dueDate = dueDate || new Date(+new Date() + DAYINSECONDS);
    this.priority = priority;
    this.project = projectname || null;
    this.id = crypto.randomUUID();

};

export function addNewTask(newtask){

    let button = document.querySelector('#add-new-task');
    button.addEventListener('click', function(){
        let title = document.querySelector('#new-task-form #title');
        let description = document.querySelector('#new-task-form #description');
        let dueDate = document.querySelector('#new-task-form #dueDate');
        let description = document.querySelector('#new-task-form #description');
        
    });
    Tasks.push(newtask);

};

function setPriority(){
    let urgency = document.querySelector('#new-task-form #urgency');
    let importance = document.querySelector('#new-task-form #importance');

    
}






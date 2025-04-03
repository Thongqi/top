import { checkIfProjectsLocalStoragePresent, populateProjectsStorage } from "./localstorage";
import { Projects } from "./index.js"
import { displayProjectinSidebar, displayProjects } from "./displayprojects.js";

export function addProject(projectname){
    Projects.push(projectname);
    populateProjectsStorage(Projects);
    displayProjectinSidebar(projectname);
}


function addProjecttoSidebar(){
    const input = document.querySelector('#add-project-input');
    input.addEventListener('keydown', function(e){
        if (e.key == 'Enter' && input.value != ''){
            displayProjectinSidebar(input.value);
            addProject(input.value);
        }
    })

}

export function displayElement(e){
    var addbutton = document.querySelector('#add-new-project');

    if (e.target.id == 'add-new-project'){
        toggleInputElement();
        toggleDisplay(addbutton);
        addProjecttoSidebar();
    }
    else if (e.target.id == 'add-project-input'){
        
    }
    else{
        if(addbutton.style.display == 'none'){
            toggleDisplay(addbutton);
            toggleInputElement();
        }
    }
}

function toggleInputElement(){

    const input = document.querySelector('#add-project-input');
    input.style.display = input.style.display === 'none' ? 'block' : 'none';
    input.focus();

}

function toggleDisplay(element){
    element.style.display = element.style.display === 'none' ? '' : 'none';
}

function addProject(){
    const input = document.querySelector('#add-project-input');
    input.addEventListener('keydown', function(e){
        if (e.key == 'Enter' && input.value != ''){
            const projectlists = document.querySelector('.projects').children;

            const newli = document.createElement('li');
            newli.innerHTML = input.value;

            // add newproject before button
            projectlists[projectlists.length - 3].insertAdjacentElement("afterend", newli);
        }
    })

}

export function displayElement(e){
    var addbutton = document.querySelector('#add-new-project');

    if (e.target.id == 'add-new-project'){
        toggleInputElement();
        toggleDisplay(addbutton);
        addProject();
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
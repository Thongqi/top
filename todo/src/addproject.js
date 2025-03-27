
export function addProject(e){
    var addbutton = document.querySelector('#add-new-project');

    // window.addEventListener('click', function(e){

        if (e.target.id != 'add-project-input'){

        }
        else if (e.target.id == 'add-new-project'){
            addInputElement();
        }
        else{
            toggleDisplay(addbutton);
        }
    // })
    


}

function addInputElement(){
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'add-project-input';
    input.focus();

    const sidebar = document.querySelector('.sidebar ul');

    sidebar.appendChild(input);
}

function toggleDisplay(element){
    element.style.display = element.style.display === 'none' ? '' : 'none';
}
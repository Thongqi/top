
export function addProject(e){
    var addbutton = document.querySelector('#add-new-project');

    // window.addEventListener('click', function(e){
    console.log(e.target.id)
        if (e.target.id == 'add-new-project'){
            toggleInputElement();
            toggleDisplay(addbutton);
        }
        else if (e.target.id == 'add-project-input'){
            
        }
        else{
            if(addbutton.style.display == 'none'){
                toggleDisplay(addbutton);
                toggleInputElement();
            }
        }
    // })
    


}

function toggleInputElement(){

    const input = document.querySelector('#add-project-input');
    input.style.display = input.style.display === 'none' ? 'block' : 'none';
    input.focus();

}

function toggleDisplay(element){
    element.style.display = element.style.display === 'none' ? '' : 'none';
}
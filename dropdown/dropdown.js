function displayDropdownList(element){
    element.target.querySelector('.dropdown-list').classList.toggle('show');
}

window.onclick = function(e){
    if (e.target.matches('.dropdown-click')){
        document.querySelectorAll('.dropdown-list').forEach(list => {
            if (list.classList.contains('.show')){
                list.classList.remove('show');
            }
        })
    }
}
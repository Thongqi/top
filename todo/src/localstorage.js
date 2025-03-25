export function populateStorage(Tasks){
    localStorage.setItem("tasks", JSON.stringify(Tasks));
}

export function checkIfLocalStoragePresent(){
    return retrieveLocalStorage() || [];
}

function retrieveLocalStorage(){
    return JSON.parse(localStorage.getItem("tasks"));
}
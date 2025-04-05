export function displayProjects(Projects){
    Projects.forEach(project => displayProjectinSidebar(project));
}

export function displayProjectinSidebar(projectname){
    const newli = document.createElement('li');
    newli.innerHTML = projectname;
    newli.id = projectname;

    const projectlists = document.querySelector('.projects').children;
    projectlists[projectlists.length - 3].insertAdjacentElement("afterend", newli);

}
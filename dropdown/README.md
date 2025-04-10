In testing...

It is a simple dropdown effect. You can choose either to show dropdown over hover or click.

Example of usage:
For display dropdown over click, use 'dropdown-click' class and add in onclick="displayDropdownList(this);"
```
    <li class="dropdown-click" onclick="displayDropdownList(this);">
        Services
        <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="16px" height="16px" viewBox="-6.5 0 32 32" version="1.1">
            <title>dropdown</title>
            <path d="M18.813 11.406l-7.906 9.906c-0.75 0.906-1.906 0.906-2.625 0l-7.906-9.906c-0.75-0.938-0.375-1.656 0.781-1.656h16.875c1.188 0 1.531 0.719 0.781 1.656z"/>
        </svg>
        <div class="dropdown-list">
            <ul>
                <li><a href="">Painting</a></li>
                <li><a href="">Googling</a></li>
                <li><a href="">Sleeping</a></li>
            </ul>
        </div>
    </li>
```
For display over hover, just add in 'dropdown-hover' as class. No function is needed.
```
    <li class="dropdown-hover">
        News
        <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="16px" height="16px" viewBox="-6.5 0 32 32" version="1.1">
            <title>dropdown</title>
            <path d="M18.813 11.406l-7.906 9.906c-0.75 0.906-1.906 0.906-2.625 0l-7.906-9.906c-0.75-0.938-0.375-1.656 0.781-1.656h16.875c1.188 0 1.531 0.719 0.781 1.656z"/>
        </svg>
        <div class="dropdown-list">
            <ul>
                <li><a href="">Today</a></li>
                <li><a href="">Yesterday</a></li>
                <li><a href="">Tomorrow</a></li>
            </ul>
        </div>
    </li>
```
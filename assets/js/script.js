let tasksList = [];

//Wait for the DOM to finish loading before users interaction
document.addEventListener("DOMContentLoaded", function () {
    // declaration of the variables
    const todoForm = document.querySelector("#todo-form");
    const searchInput = document.querySelector("#search-input");
    const filterSelect = document.querySelector("#filter-select");
    const todoInput = document.querySelector("#todo-input");
    const todoList = document.querySelector("#todo-list");

    //Listener to add tasks
    todoForm.addEventListener("submit", (e) => {
        const inputValue = todoInput.value.trim();
        e.preventDefault();
        if (inputValue) {
            newTodo(todoInput, todoList, searchInput, filterSelect);
        }
    });

    //Listener to search function
    searchInput.addEventListener("input", searchTodo);

    //Listener to filter function
    filterSelect.addEventListener("change", filterTask);
});

// functions
/**
 * @function  create the to do list and the buttons 
 * @param {object} todoInput input text element 
 * @param {object} todoList div element for the new task
 * @param {object} searchInput input text for the search
 * @param {object} filterSelect select element
 */
function newTodo(todoInput, todoList, searchInput, filterSelect) {
    const todo = document.createElement("div");
    todo.style.flex = 1;
    //add control classes 
    todo.classList.add("todo");
    todo.classList.add("pending");

    const todoTask = document.createElement("h3");
    todoTask.innerHTML = todoInput.value;
    todoTask.id = "h3";
    todo.appendChild(todoTask);

    // array with icon classes
    let buttons = ["check", "pen", "xmark"];
    //using forEach to create each button based on the array taking advantage of it to define icon classes
    buttons.forEach((item) => {
        const element = document.createElement("button");
        element.classList.add(item);
        element.innerHTML = '<i class="fa-solid fa-' + item + '"></i>';
        element.addEventListener("click", taskTodo);
        todo.appendChild(element);
    });

    // attach element into div todo list 
    todoList.append(todo);
    todoInput.value = "";
    todoInput.focus();

    //add the new task to the list to be used later
    tasksList.push(todo);

    //reset filter select
    filterSelect.selectedIndex = 0;
    filterSelect.dispatchEvent(new Event('change'));

    //reset search
    searchInput.value = "";
    searchInput.dispatchEvent(new Event('input'));
}

/**
 * @function using (e).currentTarget to assign the listeners to each button
 * @param {object} e from the listener
 */
function taskTodo(e) {
    let parent = e.currentTarget.parentNode;
    let element = e.currentTarget;
    //
    if (element.classList.contains("check")) {
        parent.classList.toggle("done");
        parent.classList.toggle("pending");
        const filterSelect = document.querySelector("#filter-select")
        filterSelect.dispatchEvent(new Event('change'));
        //Remove the task when users click on xmark  
    } else if (element.classList.contains("xmark")) {
        parent.remove();
        //Call the editTodofunction when users click to edit it
    } else if (element.classList.contains("pen")) {
        editTodo(parent);
        //Call the saveTodo function when users click to save it 
    } else {
        saveTodo(parent);
    }
}
/**
 * @function  edit the task creating an input text element and save button
 * Replace the task with the edition
 * @param {object} parent div element the task itself
 */
function editTodo(parent) {
    const nodeList = parent.childNodes;
    const taskName = parent.firstChild;
    let editText = taskName.innerHTML;
    const editInput = document.createElement("input");
    editInput.setAttribute("type", "text");
    editInput.style.flex = 1;
    editInput.value = editText;
    taskName.replaceWith(editInput);
    editInput.focus();
    showHideButtons(1, nodeList, false);
    const saveButton = document.createElement("button");
    saveButton.classList.add("edit-save");
    saveButton.innerHTML = '<i class="fa-solid fa-save"></i>';
    saveButton.addEventListener("click", taskTodo);
    editInput.parentNode.insertBefore(saveButton, editInput.nextSibling);
}

/**
 * @function  save the edidet task and show the hide buttons
 * @param {object} parent div element the task itself
 */
function saveTodo(parent) {
    const taskNameInput = parent.firstChild;
    let taskNameUpdate = taskNameInput.value;
    taskNameInput.style.display = "none";
    const taskName = document.createElement("h3");
    taskName.innerHTML = taskNameUpdate;
    taskNameInput.replaceWith(taskName);
    const nodeList = parent.childNodes;
    showHideButtons(1, nodeList, true);
}

/**
 * @function search a task in the to do list calling findTask
 * @param {object} e input text with the value to be searched
 */
function searchTodo(e) {
    let element = e.currentTarget;
    let searchResults = findTask(element.value.toLowerCase());

    //condition to display only the searched task
    tasksList.some((r) => {
        if (searchResults.includes(r)) {
            r.style.display = "flex";
        } else {
            r.style.display = "none";
        }
    });

    if (element.value == "") {

        var filterValue = document.querySelector("#filter-select");

        if (filterValue.value == "all") {
            tasksList.forEach((item) => {
                item.style.display = "flex";
            });
        } else {

            tasksList.forEach((item) => {
                if (item.classList.contains(filterValue.value)) {
                    item.style.display = "flex";
                } else if (filterValue.value == "all") {
                    item.style.display = "flex";
                }
            });
        }
    }
}

/**
 * @function find a task in the "to do" list i.e. taskList
 * @param {string} search term 
 * @returns results of the search as array
 */
function findTask(searchTerm) {
    if (searchTerm === "" || tasksList.length == 0) {
        return [];
    } else {
        let filterValue = document.querySelector("#filter-select");
        let searchResults = [];
        for (let task of tasksList) {
            let taskToSearch = task.firstChild.innerHTML;
            if (taskToSearch.toLowerCase().includes(searchTerm) && (task.classList.contains(filterValue.value) || filterValue.value == "all")) {
                searchResults.push(task);
            }
        }
        return searchResults;
    }
}

/**
 * show and hide buttons accordingly with the event either "edit" or "save" 
 * @function showHideButtons
 * @param {Integer} index 
 * @param {NodeList} nodeList of the parent i.e div "todo"
 * @param {boolean} show true if the "click" event comes from the "save" button, the button must be removed
 */
function showHideButtons(index, nodeList, show) {
    let display = "none";
    if (show) {
        nodeList[1].remove();
        display = "flex";
    }
    for (let i = index; i < nodeList.length; i++) {
        nodeList[i].style.display = display;
    }
}

/** filter task function, change event of select element
 * @function filterTask
 * @param {object} filter select element 
 */
function filterTask(filter) {
    let searchValue = document.querySelector("#search-input");
    if (filter.currentTarget.value === "all") {
        tasksList.forEach((item) => {
            if (searchValue.value) {
                if (item.firstChild.innerHTML.toLowerCase().includes(searchValue.value)) {
                    item.style.display = "flex";
                }
            } else {
                item.style.display = "flex";
            }
        });
    } else {
        tasksList.some((f) => {
            if (f.classList.contains(filter.currentTarget.value) && f.firstChild.innerHTML.toLowerCase().includes(searchValue.value)) {
                f.style.display = "flex";
            } else {
                f.style.display = "none";
            }
        });
    }
}
//Wait for the DOM to finish loading before users interaction
let tasksList = [];
// declaration of the variables

document.addEventListener("DOMContentLoaded", function () {
    const todoForm = document.querySelector("#todo-form");
    const searchInput = document.querySelector("#search-input");
    const filterSelect = document.querySelector("#filter-select");
    const todoInput = document.querySelector("#todo-input");
    const todoList = document.querySelector("#todo-list");

    
    /**
     * Function to add new task 
     * Prevent that information wont be sent to back end
     */
    todoForm.addEventListener("submit", (e) => {
        const inputValue = todoInput.value.trim();
        e.preventDefault();
        if (inputValue) {
            newTodo(todoInput, todoList);
        }
    });

    //Listener to search function
    searchInput.addEventListener("input", searchTodo);

    //Listener to filter function
    filterSelect.addEventListener("change", filterTask);
});

// functions
/** 
 * function to create the to do list and the buttons 
 */
function newTodo(e1, e2) {

    console.log>(e1);

    const todo = document.createElement("div");
    todo.style.flex = 1;
    //add control classes 
    todo.classList.add("todo");
    todo.classList.add("pending");

    const todoTask = document.createElement("h3");
    todoTask.innerHTML = e1.value;
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
    })

    // attach element into div todo list 
    e2.append(todo);
    e1.value = "";
    e1.focus();

    //add the new task to the list to be used later
    tasksList.push(todo);
};

/**
 * Function using (e).currentTarget to assign the listeners to each button
 * @param {*} e 
 */
function taskTodo(e) {
    let parent = e.currentTarget.parentNode;
    let element = e.currentTarget;
    //
    if (element.classList.contains("check")) {
        parent.classList.toggle("done");
        parent.classList.toggle("pending");
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
 * Function do edit the task creating an input and save button
 * Replace the task with the edition
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
 * Function to save the edidet task and show the hide buttons
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
 * Function to search a task in the to do list calling findTask
 */
function searchTodo(e) {
    let parent = e.currentTarget.parentNode;
    let element = e.currentTarget;

    tasks = parent.childNodes;

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
            })
        } else {

            tasksList.forEach((item) => {
                if (item.classList.contains(filterValue.value)) {
                    item.style.display = "flex";
                } else if (filterValue.value == "all") {
                    item.style.display = "flex";
                }
            })
        }
    }
}

/**
 * Function to find a task in the "to do" list i.e. taskList
 * returning the results as array
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
    let display = "none"
    if (show) {
        nodeList[1].remove();
        display = "flex"
    }
    for (let i = index; i < nodeList.length; i++) {
        nodeList[i].style.display = display;
    }
}

/** filter task function, change event of select element
 * @function filterTask
 * @param {Element} filter select element 
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
            // if (f.classList.contains(filter.value))
            if (f.classList.contains(filter.currentTarget.value) && f.firstChild.innerHTML.toLowerCase().includes(searchValue.value)) {
                f.style.display = "flex";
            } else {
                f.style.display = "none";
            }
        });
    }
}
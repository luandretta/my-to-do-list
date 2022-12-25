//Wait for the DOM to finish loading before users interaction
let tasksList = [];
document.addEventListener("DOMContentLoaded", function () {


    // declaration of the variables
    const todoForm = document.querySelector("#todo-form");
    const todoInput = document.querySelector("#todo-input");
    const todoList = document.querySelector("#todo-list");
    const searchInput = document.querySelector("#search-input");

    /**
     * prevent that information wont be sent to back end
     * and save todo value
     */
    todoForm.addEventListener("submit", (e) => {
        const inputValue = todoInput.value.trim();
        e.preventDefault();
        if (inputValue) {
            newTodo(todoList, todoInput);
        }
    });

    searchInput.addEventListener("input", searchTodo);


});




// functions
/** 
 * function to create the to do list with buttons to edit the list
 */

function newTodo(todo_list, todo_input) {

    const todo = document.createElement("div");
    todo.style.flex = 1;
    todo.classList.add("todo");

    const todoTask = document.createElement("h3");
    todoTask.innerHTML = todo_input.value;
    todoTask.id = "h3";
    todo.appendChild(todoTask);

    // buttons
    let buttons = ["check", "pen", "xmark"];
    buttons.forEach((item) => {
        const element = document.createElement("button");
        element.classList.add(item);
        element.innerHTML = '<i class="fa-solid fa-'+ item + '"></i>';
        element.addEventListener("click", taskTodo);
        todo.appendChild(element);
    })

    // attach element into div todo list 
    todo_list.append(todo);
    todo_input.value = "";
    todo_input.focus();

    tasksList.push(todo);

};
/**
 * 
 */
function taskTodo(e){
    let parent = e.currentTarget.parentNode;
    let element = e.currentTarget;

    if (element.classList.contains("check")){
        parent.classList.toggle("done");
    }
    else if(element.classList.contains("xmark")){
        parent.remove();

    }else if(element.classList.contains("pen")){
        editTodo(parent);

    }else{
        saveTodo(parent);
    }
    
}

function editTodo(parent){
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

function saveTodo(parent){
    const taskNameInput = parent.firstChild;
    let taskNameUpdate = taskNameInput.value;
    taskNameInput.style.display = "none";
    const taskName = document.createElement("h3");
    taskName.innerHTML = taskNameUpdate;
    taskNameInput.replaceWith(taskName);
    const nodeList = parent.childNodes;
    showHideButtons(2, nodeList, true);
}

function searchTodo(e){
    let parent = e.currentTarget.parentNode;
    let element = e.currentTarget;
    
    tasks = parent.childNodes;
    console.log(element.value.toLowerCase());

    let searchResults = findTask(element.value.toLowerCase());

    tasksList.some((r) => {
        if (searchResults.includes(r)){
            r.style.display = "flex";
        }else{
            r.style.display = "none";
        }
    });

    if (element.value == ""){
        tasksList.forEach((item) => {
            item.style.display = "flex";
        })
    }
}

function findTask(searchTerm){
    if (searchTerm === "" || tasksList.length == 0){
        return [];
    } else{
        let searchResults = [];
        for (let task of tasksList){
            let taskToSearch = task.firstChild.innerHTML;
            if (taskToSearch.toLowerCase().startsWith(searchTerm)){
                searchResults.push(task);
            }
        }
        return searchResults;
    }
}


function showHideButtons(index, nodeList, show){
    let display = "none"
    if (show){
        nodeList[1].style.display = "none";
        display = "flex"
    }
    for (let i = index; i < nodeList.length; i++) {
        nodeList[i].style.display = display;
    }

}
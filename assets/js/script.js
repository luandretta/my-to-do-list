//Wait for the DOM to finish loading before users interaction
let idCount = 0;
document.addEventListener("DOMContentLoaded", function () {


    // declaration of the variables
    const todoForm = document.querySelector("#todo-form");
    const todoInput = document.querySelector("#todo-input");
    const todoList = document.querySelector("#todo-list");
    

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

});

/**
 * event listeners to the buttons
 */
/*
document.addEventListener("click", (e) => {
    const targetEl = e.target;
    console.log(targetEl);

    const parentEl = targetEl.closest("div");
    let todoTask;

    if (parentEl && parentEl.querySelector("h3")) {
        todoTask = parentEl.querySelector("h3").innerText;
    }

    if (targetEl.classList.contains("finish-todo") || targetEl.parentNode.classList.contains("finish-todo")) {
        console.log(targetEl.classList);
        parentEl.classList.toggle("done");
    }

    if (targetEl.classList.contains("remove-todo") || targetEl.parentNode.classList.contains("remove-todo")) {
        parentEl.remove();
    }

    if (targetEl.classList.contains("edit-todo") || targetEl.parentNode.classList.contains("edit-todo")) {
        console.log(todoTask);
        console.log("-----------");
        let id = targetEl.id;
        let text = document.getElementById("h3" + id).innerHTML;
        const h3 = document.getElementById("h3" + id);
        console.log(h3.value);
        console.log(text);
        const editInputText = document.createElement("input");
        editInputText.setAttribute("type", "text");
        editInputText.name = "editInput" + id;
        editInputText.style.display = "flex";
        editInputText.style.flex = 1;
        editInputText.value = todoTask;
        h3.replaceWith(editInputText);
        const doneBtn = document.getElementsByName("done" + id)[0];
        doneBtn.style.display = "none";
        const editBtn = document.getElementsByName("edit" + id)[0];
        editBtn.style.display = "none";
        const deleteBtn = document.getElementsByName("delete" + id)[0];
        deleteBtn.style.display = "none";

        const saveButton = document.createElement("button");
        saveButton.classList.add("edit-save");
        saveButton.id = id;
        saveButton.name = "save" + id;
        saveButton.innerHTML = '<i class="fa-solid fa-save" id="' + id + '"></i>';
        editInputText.parentNode.insertBefore(saveButton, editInputText.nextSibling);
        editInputText.focus();
    }
    if (targetEl.classList.contains("edit-save") || targetEl.parentNode.classList.contains("edit-save")) {
        let id = targetEl.id;
        console.log(id);
        const editInputText = document.getElementsByName("editInput" + id)[0];
        text_updated = editInputText.value;
        editInputText.style.display = "none";
        const h3 = document.createElement("h3");
        h3.id = "h3" + id;
        h3.innerHTML = text_updated;
        editInputText.replaceWith(h3);
        const doneBtn = document.getElementsByName("done" + id)[0];
        doneBtn.style.display = "flex";
        const editBtn = document.getElementsByName("edit" + id)[0];
        editBtn.style.display = "flex";
        const deleteBtn = document.getElementsByName("delete" + id)[0];
        deleteBtn.style.display = "flex";
        const saveBtn = document.getElementsByName("save" + id)[0];
        saveBtn.style.display = "none";
    }
});

//});


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
    todoTask.id = "h3" + idCount;
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
    idCount++;
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
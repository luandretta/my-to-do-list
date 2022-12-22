//Wait for the DOM to finish loading before users interaction
let idCount = 0;
document.addEventListener("DOMContentLoaded", function () {


    // declaration of the variables
    const todoForm = document.querySelector("#todo-form");
    const todoInput = document.querySelector("#todo-input");
    const editForm = document.querySelector("#edit-form");
    const editInput = document.querySelector("#edit-input");
    const cancelEditBtn = document.querySelector("#cancel-edit-btn");
    const todoList = document.querySelector("#todo-list");
    const finishTodoButton = document.querySelector(".finish-todo");
    const editTodoButton = document.querySelector(".edit-todo");
    const removeTodoButton = document.querySelector(".remove-todo");

    /**
     * prevent that information wont be sent to back end
     * and save todo value
     */
    todoForm.addEventListener("submit", (e) => {
        const inputValue = todoInput.value.trim();
        e.preventDefault();
        if (inputValue) {
            saveTodo(todoList, todoInput);
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

function saveTodo(todo_list, todo_input) {

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
        element.id = idCount;
        element.name = item + idCount;
        element.innerHTML = '<i class="fa-solid fa-'+ item + ' id="' + idCount + '"></i>';
        element.addEventListener("click", finishTodo);
        todo.appendChild(element);
    })

    // for (i = 0; i < buttons.length; i++ ){

    // }

    // const doneBtn = document.createElement("button");
    // doneBtn.classList.add("finish-todo");
    // doneBtn.id = idCount;
    // doneBtn.name = "done" + idCount;
    // doneBtn.innerHTML = '<i class="fa-solid fa-check" id="' + idCount + '"></i>';
    // doneBtn.addEventListener("click", finishTodo);
    // todo.appendChild(doneBtn);

    // const editBtn = document.createElement("button");
    // editBtn.classList.add("edit-todo");
    // editBtn.id = idCount;
    // editBtn.name = "edit" + idCount;
    // editBtn.innerHTML = '<i class="fa-solid fa-pen" id="' + idCount + '"></i>';
    // editBtn.addEventListener("click", finishTodo);
    // todo.appendChild(editBtn);

    // const deleteBtn = document.createElement("button");
    // deleteBtn.classList.add("remove-todo");
    // deleteBtn.id = idCount;
    // deleteBtn.name = "delete" + idCount;
    // deleteBtn.innerHTML = '<i class="fa-solid fa-xmark" id="' + idCount + '"></i>';
    // doneBtn.addEventListener("click", finishTodo);
    // todo.appendChild(deleteBtn);

    todo_list.append(todo);
    todo_input.value = "";
    todo_input.focus();
    idCount++;
};
/**
 * 
 */
function finishTodo(e){
    let parent = e.currentTarget.parentNode;
    let element = e.currentTarget;

    if (element.classList.contains("check")){
        parent.classList.toggle("done");
    }
    else if(element.classList.contains("xmark")){
        parent.remove();

    }else {
        console.log("------PARENT----")
        console.log(parent);
    }
    
}

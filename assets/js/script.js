//Wait for the DOM to finish loading before running the quiz
document.addEventListener("DOMContentLoaded", function () {

    // declaration of the variables
    const todoForm = document.querySelector("#todo-form");
    const todoInput = document.querySelector("#todo-input");
    const editForm = document.querySelector("#edit-form");
    const editInput = document.querySelector("#edit-input");
    const cancelEditBtn = document.querySelector("#cancel-edit-btn");
    const todoList = document.querySelector("#todo-list");

    /**
     * prevent that information wont be sent to back end
     * and save todo value
     */
    todoForm.addEventListener("submit", (e) => {
        const inputValue = todoInput.value;
        e.preventDefault();

        if (inputValue) {

            saveTodo(todoList, todoInput);

        }
    });

    /**
     * event listeners to the buttons
     */
    
    //document.addEventListener("click", (e) => {
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
            toggleForms();
        }
    });

});


// functions
/** 
 * function to create the to do list with buttons to edit the list
 */
function saveTodo(todo_list, todo_input) {

    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todoTask = document.createElement("h3");
    todoTask.innerHTML = todo_input.value;
    todo.appendChild(todoTask);

    // buttons

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(doneBtn);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-todo");
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(deleteBtn);

    todo_list.append(todo);
    todo_input.value = "";
    todo_input.focus();
};

// events